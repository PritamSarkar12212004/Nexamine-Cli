import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import ImageBaseConveter from '../../../components/converter/ImageBaseConveter';
import encryptFiles from '../../../components/encryption/Encryption';
import { userContext } from '../../../utils/context/ContextProvider';

const UploadingScreen = () => {
    const route = useRoute();
    const { data } = route.params.data;
    const { tokenContext } = userContext()
    const [converted, setConverted] = useState<any>([]);
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
            setConverted(finalData);
            const returnFile = await encryptFiles(
                finalData,
                tokenContext.publickToken,
                tokenContext.privateToken
            );
            console.log("encrypt file", returnFile)

        });
    };

    useEffect(() => {
        if (data) {
            convertData();
        }
    }, [data]);

    return (
        <View>

        </View>
    );
};

export default UploadingScreen;
