import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import ImageBaseConveter from '../../../components/converter/ImageBaseConveter';
import encryptFiles from '../../../components/encryption/Encryption';
import { userContext } from '../../../utils/context/ContextProvider';
import api from '../../../utils/api/api';
import ColorGrediant from '../../../components/wraper/ColorGrediant';
import Lotti from '../../../components/animation/Lotti';
import AnimationConstant from '../../../constants/animation/AnimationConstant';
import GrediantColor from '../../../constants/colors/GrediantColor';
import { View } from 'react-native';

const UploadingScreen = () => {
    const route = useRoute();
    const { data } = route.params.data;
    const { tokenContext } = userContext()
    const splitBase64 = (base64String: any) => {
        const mid = Math.ceil(base64String.length / 2);
        return {
            part1: base64String.slice(0, mid),
            part2: base64String.slice(mid),
        };
    };

    const convertData = async () => {
        await ImageBaseConveter({ imagePaths: data }).then(async (res) => {
            const finalData = res.map((item) => {
                const { part1, part2 } = splitBase64(item.base64);
                return {
                    path: item.path,
                    part1,
                    part2,
                };
            });
            const returnFile = await encryptFiles(
                finalData,
                tokenContext.publickToken,
                tokenContext.privateToken
            );
            console.log("call")
            await api.post("/image/store-data", {
                payload: returnFile
            }).then((res) => {
                console.log(res.data)
            }).catch((err) => {
                console.log(err)
            })
        });
        console.log("call domne")
    };

    useEffect(() => {
        if (data) {
            convertData();
        }
    }, [data]);

    return (
        <ColorGrediant>
            <View className='flex-1 flex items-center justify-center'>

                <Lotti path={AnimationConstant.UploaedAni} backgroundColor={GrediantColor.firstColor} height={500} width={500} />
            </View>
        </ColorGrediant>
    );
};

export default UploadingScreen;
