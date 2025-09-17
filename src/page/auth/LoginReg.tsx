import { View, Text, TextInput, KeyboardAvoidingView, Platform, ScrollView, TouchableOpacity, Image, Alert, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import CheckBox from '@react-native-community/checkbox';
import ColorGrediant from '../../components/wraper/ColorGrediant'
import GrediantColor from '../../constants/colors/GrediantColor';
import ImageConstant from '../../constants/image/ImageConstant';
import { useNavigation } from '@react-navigation/native';
import useAuth from '../../hooks/api/auth/useAuth';

interface FormErrors {
    name?: string;
    lastName?: string;
    userName?: string;
    phoneNumber?: string;
    password?: string;
    terms?: string;
}

const LoginReg = () => {
    const navigation = useNavigation()
    const { authApi } = useAuth()

    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [name, setName] = useState<string>('')
    const [lastName, setLastName] = useState<string>('')
    const [userName, setUserName] = useState<string>('')
    const [phoneNumber, setPhoneNumber] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [errors, setErrors] = useState<FormErrors>({})
    const [loading, setloading] = useState<boolean>(false)

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {}
        if (!name.trim()) {
            newErrors.name = 'First name is required'
        } else if (name.length < 2) {
            newErrors.name = 'First name must be at least 2 characters'
        }
        if (!lastName.trim()) {
            newErrors.lastName = 'Last name is required'
        } else if (lastName.length < 2) {
            newErrors.lastName = 'Last name must be at least 2 characters'
        } if (!userName.trim()) {
            newErrors.userName = 'Username is required'
        } else if (userName.length < 4) {
            newErrors.userName = 'Username must be at least 4 characters'
        } else if (!/^[a-zA-Z0-9_]+$/.test(userName)) {
            newErrors.userName = 'Username can only contain letters, numbers and underscores'
        }
        if (!phoneNumber.trim()) {
            newErrors.phoneNumber = 'Phone number is required'
        } else if (!/^[0-9+\-\s()]+$/.test(phoneNumber)) {
            newErrors.phoneNumber = 'Please enter a valid phone number'
        } else if (phoneNumber.replace(/\D/g, '').length < 10) {
            newErrors.phoneNumber = 'Phone number must be at least 10 digits'
        }
        if (!password) {
            newErrors.password = 'Password is required'
        } else if (password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters'
        } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
            newErrors.password = 'Password must contain uppercase, lowercase and numbers'
        }
        if (!toggleCheckBox) {
            newErrors.terms = 'You must accept the Terms & Conditions'
        }
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async () => {
        if (validateForm()) {
            setloading(true)
            const data = await {
                name: name,
                lastName: lastName,
                userName: userName,
                password: password
            }
            authApi({ number: phoneNumber, setloading: setloading, data: data })
        }
    }

    const getInputBorderColor = (fieldName: keyof FormErrors): string => {
        return errors[fieldName] ? 'border-red-500' : 'border-white/10'
    }

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
                                    <TouchableOpacity
                                        activeOpacity={0.8}
                                        onPress={() => navigation.goBack()}
                                        className='px-5 py-2 rounded-3xl bg-white/40'
                                    >
                                        <Text>Login Account</Text>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <Text className='text-4xl text-white/70 font-semibold px-8 text-center'>
                                        Your Files. Your Key. Your Security
                                    </Text>
                                </View>
                            </View>
                            <Image
                                source={ImageConstant.Login}
                                className='w-full h-full rounded-3xl opacity-85'
                                resizeMode='cover'
                            />
                        </View>
                        <View className="w-[48%] flex gap-3 justify-between">
                            <View className="flex gap-3">
                                <Text className="text-4xl tracking-widest text-white/70 font-semibold">
                                    Create an Account
                                </Text>
                                <Text className="text-white/70">
                                    access your account by Create
                                </Text>
                            </View>
                            <View className="w-full flex gap-5">
                                <View className="w-full flex flex-row items-center justify-between">
                                    <View className="w-[49%]">
                                        <TextInput
                                            className={`h-14 bg-white/20 rounded-lg border-2 px-3 placeholder:text-lg placeholder:text-white/70 text-white/80 ${getInputBorderColor('name')}`}
                                            placeholder="First name"
                                            placeholderTextColor="rgba(255,255,255,0.7)"
                                            value={name}
                                            onChangeText={(text) => {
                                                setName(text)
                                                if (errors.name) {
                                                    setErrors({ ...errors, name: undefined })
                                                }
                                            }}
                                        />
                                        {errors.name && (
                                            <Text className="text-red-500 text-xs mt-1">{errors.name}</Text>
                                        )}
                                    </View>
                                    <View className="w-[49%]">
                                        <TextInput
                                            className={`h-14 bg-white/20 rounded-lg border-2 px-3 placeholder:text-lg placeholder:text-white/70 text-white/80 ${getInputBorderColor('lastName')}`}
                                            placeholder="Last name"
                                            placeholderTextColor="rgba(255,255,255,0.7)"
                                            value={lastName}
                                            onChangeText={(text) => {
                                                setLastName(text)
                                                if (errors.lastName) {
                                                    setErrors({ ...errors, lastName: undefined })
                                                }
                                            }}
                                        />
                                        {errors.lastName && (
                                            <Text className="text-red-500 text-xs mt-1">{errors.lastName}</Text>
                                        )}
                                    </View>
                                </View>
                                <View className="w-full">
                                    <TextInput
                                        className={`h-14 bg-white/20 w-full rounded-lg border-2 px-3 placeholder:text-lg placeholder:text-white/70 text-white/80 ${getInputBorderColor('userName')}`}
                                        placeholder="Username"
                                        placeholderTextColor="rgba(255,255,255,0.7)"
                                        value={userName}
                                        onChangeText={(text) => {
                                            setUserName(text)
                                            if (errors.userName) {
                                                setErrors({ ...errors, userName: undefined })
                                            }
                                        }}
                                        autoCapitalize="none"
                                    />
                                    {errors.userName && (
                                        <Text className="text-red-500 text-xs mt-1">{errors.userName}</Text>
                                    )}
                                </View>
                                <View className="w-full">
                                    <TextInput
                                        className={`h-14 bg-white/20 w-full rounded-lg border-2 px-3 placeholder:text-lg placeholder:text-white/70 text-white/80 ${getInputBorderColor('phoneNumber')}`}
                                        placeholder="Phone number"
                                        placeholderTextColor="rgba(255,255,255,0.7)"
                                        keyboardType="phone-pad"
                                        value={phoneNumber}
                                        onChangeText={(text) => {
                                            setPhoneNumber(text)
                                            if (errors.phoneNumber) {
                                                setErrors({ ...errors, phoneNumber: undefined })
                                            }
                                        }}
                                    />
                                    {errors.phoneNumber && (
                                        <Text className="text-red-500 text-xs mt-1">{errors.phoneNumber}</Text>
                                    )}
                                </View>
                                <View className="w-full">
                                    <TextInput
                                        className={`h-14 bg-white/20 w-full rounded-lg border-2 px-3 placeholder:text-lg placeholder:text-white/70 text-white/80 ${getInputBorderColor('password')}`}
                                        placeholder="Password"
                                        placeholderTextColor="rgba(255,255,255,0.7)"
                                        secureTextEntry
                                        value={password}
                                        onChangeText={(text) => {
                                            setPassword(text)
                                            if (errors.password) {
                                                setErrors({ ...errors, password: undefined })
                                            }
                                        }}
                                    />
                                    {errors.password && (
                                        <Text className="text-red-500 text-xs mt-1">{errors.password}</Text>
                                    )}
                                </View>
                                <View className="w-full flex flex-row gap-2 items-center">
                                    <TouchableOpacity
                                        activeOpacity={0.8}
                                        onPress={() => {
                                            setToggleCheckBox(!toggleCheckBox)
                                            if (errors.terms) {
                                                setErrors({ ...errors, terms: undefined })
                                            }
                                        }}
                                        className='flex flex-row gap-2 items-center'
                                    >
                                        <CheckBox
                                            disabled={false}
                                            value={toggleCheckBox}
                                            onValueChange={(newValue) => {
                                                setToggleCheckBox(newValue)
                                                if (errors.terms) {
                                                    setErrors({ ...errors, terms: undefined })
                                                }
                                            }}
                                            tintColors={{ true: '#3b82f6', false: errors.terms ? '#ef4444' : 'rgba(255,255,255,0.7)' }}
                                        />
                                        <Text className='text- font-semibold text-white/80'>I agree the</Text>
                                        <Text className='text- font-semibold text-blue-500/70 underline'>Terms & Conditions</Text>
                                    </TouchableOpacity>
                                </View>
                                {errors.terms && (
                                    <Text className="text-red-500 text-xs -mt-3 ml-8">{errors.terms}</Text>
                                )}
                            </View>
                            <View className='w-full flex gap-5'>
                                <TouchableOpacity
                                    onPress={() => loading ? null : handleSubmit()}
                                    className='w-full h-14 bg-blue-500/60 rounded-lg flex items-center justify-center'
                                    activeOpacity={0.8}
                                >
                                    {
                                        loading ? <ActivityIndicator size={'small'} color={"white"} /> : <Text className='text-white font-semibold'>Create Account</Text>
                                    }
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ColorGrediant>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default LoginReg