import { View, Text, TextInput, KeyboardAvoidingView, Platform, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import CheckBox from '@react-native-community/checkbox';
import ColorGrediant from '../../components/wraper/ColorGrediant'
import Icon from '../../components/icon/Icon';
import ImageConstant from '../../constants/image/ImageConstant';
import GrediantColor from '../../constants/colors/GrediantColor';

const LoginPage = () => {
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
                                <View className='w-full flex'>
                                    <Text className='text-3xl font-bold tracking-widest text-white/50'>
                                        Nexamine
                                    </Text>
                                </View>
                                <View><Text className='text-4xl text-white/70 font-semibold px-8 text-center'>Your Files. Your Key. Your Security</Text></View>
                            </View>
                            <Image source={ImageConstant.Login} className='w-full h-full rounded-3xl opacity-85' resizeMode='cover' />
                        </View>
                        <View className="w-[48%] flex gap-3  justify-between">
                            <View className="flex gap-3">
                                <Text className="text-4xl tracking-widest text-white/70 font-semibold">
                                    Login an Account
                                </Text>
                                <Text className="text-white/70">
                                    access your account by login
                                </Text>
                            </View>
                            <View className="w-full flex gap-5">
                                <View className="w-full flex flex-row items-center justify-between">
                                    <TextInput
                                        className="h-14 bg-white/20 w-[49%] rounded-lg border-white/10 border-2 px-3 placeholder:text-lg placeholder:text-white/70 text-white/80"
                                        placeholder="First name"
                                        placeholderTextColor="rgba(255,255,255,0.7)"
                                    />
                                    <TextInput
                                        className="h-14 bg-white/20 w-[49%] rounded-lg border-white/10 border-2 px-3 placeholder:text-lg placeholder:text-white/70 text-white/80"
                                        placeholder="Last name"
                                        placeholderTextColor="rgba(255,255,255,0.7)"
                                    />
                                </View>
                                <View className="w-full">
                                    <TextInput
                                        className="h-14 bg-white/20 w-full rounded-lg border-white/10 border-2 px-3 placeholder:text-lg placeholder:text-white/70 text-white/80"
                                        placeholder="Username"
                                        placeholderTextColor="rgba(255,255,255,0.7)"
                                    />
                                </View>
                                <View className="w-full">
                                    <TextInput
                                        className="h-14 bg-white/20 w-full rounded-lg border-white/10 border-2 px-3 placeholder:text-lg placeholder:text-white/70 text-white/80"
                                        placeholder="Email id"
                                        placeholderTextColor="rgba(255,255,255,0.7)"
                                        keyboardType="email-address"
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
                                <View className='w-full flex flex-row items-center justify-between'>
                                    <View className='w-[35%] h-1 bg-white/40 rounded-full'></View>
                                    <Text className='text-white/40'>or register with</Text>
                                    <View className='w-[35%] h-1 bg-white/40 rounded-full'></View>
                                </View>
                                <View className='w-full flex flex-row items-center justify-between'>
                                    <TouchableOpacity className='h-16 w-[45%] border-2 rounded-2xl border-white/20 flex  flex-row gap-3 items-center justify-center' activeOpacity={0.8}>
                                        <Icon name='google' color='gray' size={26} />
                                        <Text className='text-xl font-semibold text-white/60'>Google</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity className='h-16 w-[45%] border-2 rounded-2xl border-white/20 flex  flex-row gap-3 items-center justify-center' activeOpacity={0.8}>
                                        <Icon name='github' color='gray' size={26} />
                                        <Text className='text-xl font-semibold text-white/60'>Github</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </ColorGrediant>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default LoginPage
