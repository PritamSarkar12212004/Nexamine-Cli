import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from '../icon/Icon'

const Header = () => {
    return (
        <View className='py-5  h-24 border-b-2 border-[#4d495b]  flex flex-row  px-10 items-center justify-between'>
            <TouchableOpacity className='h-14 w-96 bg-[#A098AE]/20 rounded-[20px] flex flex-row px-5 items-center gap-5' activeOpacity={0.9}>
                <Icon name='magnifying-glass' color='#4F45B6' size={22} />
                <Text className='text-xl  font-semibold text-gray-400'>Search here...</Text>
            </TouchableOpacity>
            <View className='fle flex-row items-center justify-center gap-8'>
                <TouchableOpacity activeOpacity={0.8}>
                    <Icon name='bell' size={25} color='#D1D1D1' />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8}>
                    <Icon name='comment' size={25} color='#D1D1D1' />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8}>
                    <Icon name='gear' size={25} color='#D1D1D1' />
                </TouchableOpacity>
                <View className='flex flex-row  gap-4'>
                    <View className='h-14 w-14 bg-[#D1D1D1] rounded-xl'></View>
                    <View>
                        <View>
                            <Text className='text-lg font-semibold text-white'>Pritam Sarkar</Text>
                        </View>
                        <View>
                            <Text className=' text-white/40'>Admin</Text>
                        </View>
                    </View>

                </View>
            </View>
        </View>
    )
}

export default Header