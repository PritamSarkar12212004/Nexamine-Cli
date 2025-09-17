import { View, Text, KeyboardAvoidingView, Platform, ScrollView, Image } from 'react-native'
import React from 'react'
import ColorGrediant from '../../components/wraper/ColorGrediant'
import ImageConstant from '../../constants/image/ImageConstant';
import GrediantColor from '../../constants/colors/GrediantColor';
import OtpInputScreen from '../../components/input/OtpInput';

const LoginVarify = () => {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1, backgroundColor: GrediantColor.firstColor }}
        >
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
            >
                <ColorGrediant>
                    <View className="flex flex-row p-7 items-center justify-between">
                        <View className="w-[48%] flex items-center justify-center rounded-3xl relative">
                            <View className='h-full w-full flex items-center justify-between rounded-3xl p-7 z-10 absolute'>
                                <View className='w-full flex flex-row items-center justify-between'>
                                    <Text className='text-3xl font-bold tracking-widest text-white/50'>
                                        Nexamine
                                    </Text>
                                </View>
                                <View><Text className='text-4xl text-white/70 font-semibold px-8 text-center'>Your Files. Your Key. Your Security</Text></View>
                            </View>
                            <Image source={ImageConstant.Login} className='w-full h-full rounded-3xl opacity-85' resizeMode='cover' />
                        </View>
                        <View className="w-[48%] flex gap-3  ">
                            <OtpInputScreen />
                        </View>
                    </View>
                </ColorGrediant>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default LoginVarify
