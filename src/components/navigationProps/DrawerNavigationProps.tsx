import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import GrediantColor from '../../constants/colors/GrediantColor'
import Icon from '../icon/Icon'

const DrawerNavigationProps = ({ navigation, state }: any) => {
    const ScreenData = [
        { ScreenName: "Home", Icon: "house", color: "white", activeColor: "#4F45B6", size: 25 },
        { ScreenName: "AnalizeScreen", Icon: "chart-simple", color: "white", activeColor: "#4F45B6", size: 25 },
        { ScreenName: "StorageScreen", Icon: "database", color: "white", activeColor: "#4F45B6", size: 25 },
        { ScreenName: "UploadScreen", Icon: "cloud", color: "white", activeColor: "#4F45B6", size: 25 },
        { ScreenName: "SettingScreen", Icon: "gear", color: "white", activeColor: "#4F45B6", size: 25 },
        { ScreenName: "ProfileScreen", Icon: "user", color: "white", activeColor: "#4F45B6", size: 25 },
    ]
    const currentRouteName = state.routeNames[state.index]

    return (
        <View className='flex-1 flex justify-center items-center '
            style={{ backgroundColor: GrediantColor.firstColor }}
        >
            <View className='flex-1 pb-8'>
                <View className='w-full flex items-center justify-center h-24'>
                    <Text className='text-3xl font-bold text-white'>Logo</Text>
                </View>
                <View className='flex-1 flex items-center justify-between mt-5 py-4'>
                    {ScreenData.map((item, index) => {
                        const isActive = currentRouteName === item.ScreenName
                        return (
                            <TouchableOpacity
                                activeOpacity={0.8}
                                key={index}
                                className="flex items-center justify-center gap-2 "
                                onPress={() => navigation.navigate(item.ScreenName)}
                            >
                                <Icon
                                    name={item.Icon}
                                    size={item.size}
                                    color={isActive ? item.activeColor : item.color}
                                />
                            </TouchableOpacity>
                        )
                    })}
                </View>
            </View>
        </View>
    )
}


export default DrawerNavigationProps