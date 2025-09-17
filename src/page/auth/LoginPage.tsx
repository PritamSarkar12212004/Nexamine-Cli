import { View, Text, TextInput, KeyboardAvoidingView, Platform, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import CheckBox from '@react-native-community/checkbox';
import ColorGrediant from '../../components/wraper/ColorGrediant'
import ImageConstant from '../../constants/image/ImageConstant';
import GrediantColor from '../../constants/colors/GrediantColor';
import { useNavigation } from '@react-navigation/native';
import useAuth from '../../hooks/api/auth/useAuth';

const LoginPage = () => {
    const navigation = useNavigation()
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

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
                                    <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate("LoginReg")} className='px-5 py-2 flex-row  gap-2  rounded-3xl bg-white/40'>
                                        <Text>Create Account</Text>
                                    </TouchableOpacity>
                                </View>
                                <View><Text className='text-4xl text-white/70 font-semibold px-8 text-center'>Your Files. Your Key. Your Security</Text></View>
                            </View>
                            <Image source={ImageConstant.Login} className='w-full h-full rounded-3xl opacity-85' resizeMode='cover' />
                        </View>
                        <View className="w-[48%] flex gap-3  ">
                            <View className="flex gap-3">
                                <Text className="text-4xl tracking-widest text-white/70 font-semibold">
                                    Login an Account
                                </Text>
                                <Text className="text-white/70">
                                    access your account by Login
                                </Text>
                            </View>
                            <View className="w-full flex gap-5">
                                <View className="w-full">
                                    <TextInput
                                        className="h-14 bg-white/20 w-full rounded-lg border-white/10 border-2 px-3 placeholder:text-lg placeholder:text-white/70 text-white/80"
                                        placeholder="Phone number"
                                        placeholderTextColor="rgba(255,255,255,0.7)"
                                        keyboardType="phone-pad"
                                    />
                                </View>
                                <View className="w-full">
                                    <TextInput
                                        className="h-14 bg-white/20 w-full rounded-lg border-white/10 border-2 px-3 placeholder:text-lg placeholder:text-white/70 text-white/80"
                                        placeholder="Password"
                                        placeholderTextColor="rgba(255,255,255,0.7)"
                                        secureTextEntry
                                    />
                                </View>
                                <View className="w-full flex flex-row gap-2 items-center">
                                    <TouchableOpacity activeOpacity={0.8} onPress={() => {
                                        setToggleCheckBox(!toggleCheckBox)
                                    }} className='flex flex-row gap-2 items-center'>
                                        <CheckBox
                                            disabled={false}
                                            value={toggleCheckBox}
                                            onValueChange={(newValue) => setToggleCheckBox(newValue)}
                                        />
                                        <Text className='text- font-semibold text-white/80'>I agree the</Text>
                                        <Text className='text- font-semibold text-blue-500/70 underline'>Terms & Conditions</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View className='w-full flex gap-5'>
                                <TouchableOpacity className='w-full h-14 bg-blue-500/60 rounded-lg flex items-center justify-center ' activeOpacity={0.8}>
                                    <Text className=' text-white font-semibold'>Login Account</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ColorGrediant>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default LoginPage
