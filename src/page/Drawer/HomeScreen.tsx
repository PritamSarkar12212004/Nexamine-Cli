import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import PageWraper from '../../components/wraper/PageWraper'
import PaiChartUi from '../../components/chart/PaiChartUi'
import LineChartBicolorUi from '../../components/chart/LineChartBicolorUi'
import Icon from '../../components/icon/Icon'
import LinearGradient from 'react-native-linear-gradient'

const HomeScreen = () => {
    const cardData = [
        {
            title: 'Total Downloads',
            value: '2,458',
            change: '+12%',
            icon: 'file-download',
            colors: ['#1E40AF', '#3730A3']
        },
        {
            title: 'Total Uploads',
            value: '1,235',
            change: '+8%',
            icon: 'file-upload',
            colors: ['#065F46', '#064E3B']
        },
        {
            title: 'Active Users',
            value: '842',
            change: '+15%',
            icon: 'users',
            colors: ['#6D28D9', '#5B21B6']
        },
        {
            title: 'Storage Used',
            value: '78%',
            change: '+5%',
            icon: 'hard-drive',
            colors: ['#9D174D', '#831843']
        }
    ]
    return (
        <View className="flex-1 bg-gray-900">
            <PageWraper>
                <ScrollView className='flex-1' showsVerticalScrollIndicator={false}>
                    <View className='flex-1 gap-6 mt-5 mb-5'>
                        <View className='flex-row justify-between'>
                            <View className='w-[48%] bg-gray-800 rounded-3xl p-5 border border-gray-700'>
                                <View className='flex-row justify-between items-center mb-3'>
                                    <Text className='text-gray-400 text-sm'>Downloads</Text>
                                    <View className='bg-blue-900/40 p-2 rounded-lg'>
                                        <Icon name="file-download" size={18} color="#60A5FA" />
                                    </View>
                                </View>
                                <Text className='text-2xl font-bold text-white'>2,458</Text>
                                <View className='flex-row items-center mt-2'>
                                    <Icon name="arrow-up" size={14} color="#4ADE80" />
                                    <Text className='text-green-400 text-xs ml-1'>+12% from last week</Text>
                                </View>
                            </View>

                            <View className='w-[48%] bg-gray-800 rounded-3xl p-5 border border-gray-700'>
                                <View className='flex-row justify-between items-center mb-3'>
                                    <Text className='text-gray-400 text-sm'>Uploads</Text>
                                    <View className='bg-green-900/40 p-2 rounded-lg'>
                                        <Icon name="file-upload" size={18} color="#4ADE80" />
                                    </View>
                                </View>
                                <Text className='text-2xl font-bold text-white'>1,235</Text>
                                <View className='flex-row items-center mt-2'>
                                    <Icon name="arrow-up" size={14} color="#4ADE80" />
                                    <Text className='text-green-400 text-xs ml-1'>+8% from last week</Text>
                                </View>
                            </View>
                        </View>
                        <View className='bg-gray-800 rounded-3xl p-5 border border-gray-700'>
                            <Text className='text-lg font-semibold text-white mb-4'>Storage Distribution</Text>
                            <View className='flex-row items-center'>
                                <PaiChartUi />
                                <View className='ml-4 flex-1'>
                                    <View className='flex-row items-center mb-3'>
                                        <View className='w-3 h-3 bg-blue-500 rounded-full mr-2'></View>
                                        <Text className='text-gray-300'>Documents</Text>
                                        <Text className='text-white font-medium ml-auto'>42%</Text>
                                    </View>
                                    <View className='flex-row items-center mb-3'>
                                        <View className='w-3 h-3 bg-green-500 rounded-full mr-2'></View>
                                        <Text className='text-gray-300'>Images</Text>
                                        <Text className='text-white font-medium ml-auto'>28%</Text>
                                    </View>
                                    <View className='flex-row items-center mb-3'>
                                        <View className='w-3 h-3 bg-purple-500 rounded-full mr-2'></View>
                                        <Text className='text-gray-300'>Videos</Text>
                                        <Text className='text-white font-medium ml-auto'>18%</Text>
                                    </View>
                                    <View className='flex-row items-center'>
                                        <View className='w-3 h-3 bg-amber-500 rounded-full mr-2'></View>
                                        <Text className='text-gray-300'>Others</Text>
                                        <Text className='text-white font-medium ml-auto'>12%</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View className='bg-gray-800 rounded-3xl p-5 border border-gray-700'>
                            <Text className='text-lg font-semibold text-white mb-4'>Weekly Activity</Text>
                            <LineChartBicolorUi />
                        </View>

                        <View className='flex-row flex-wrap justify-between '>
                            {cardData.map((card, index) => (
                                <View key={index} className='w-[48%] mb-4 '>
                                    <LinearGradient
                                        colors={card.colors}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 1 }}
                                        className='rounded-3xl p-4'
                                        style={{ borderRadius: 10 }}
                                    >
                                        <View className='flex-row justify-between items-start mb-3'>
                                            <View>
                                                <Text className='text-gray-300 text-xs'>{card.title}</Text>
                                                <Text className='text-xl font-bold text-white mt-1'>{card.value}</Text>
                                            </View>
                                            <View className='bg-white/20 p-2 rounded-lg'>
                                                <Icon name={card.icon} size={18} color="white" />
                                            </View>
                                        </View>
                                        <View className='flex-row items-center'>
                                            <Icon name="arrow-up" size={12} color="#4ADE80" />
                                            <Text className='text-green-400 text-xs ml-1'>{card.change}</Text>
                                            <Text className='text-gray-300 text-xs ml-1'>from last week</Text>
                                        </View>
                                    </LinearGradient>
                                </View>
                            ))}
                        </View>

                        <View className='bg-gray-800 rounded-3xl p-5 border border-gray-700'>
                            <Text className='text-lg font-semibold text-white mb-4'>Recent Activity</Text>
                            <View className='gap-3'>
                                <View className='flex-row items-center p-3 bg-gray-700/50 rounded-xl'>
                                    <View className='bg-blue-900/40 p-2 rounded-lg mr-3'>
                                        <Icon name="download" size={16} color="#60A5FA" />
                                    </View>
                                    <View className='flex-1'>
                                        <Text className='text-white font-medium'>New download</Text>
                                        <Text className='text-gray-400 text-xs'>2 hours ago</Text>
                                    </View>
                                    <Text className='text-blue-400 font-medium'>+1.2GB</Text>
                                </View>
                                <View className='flex-row items-center p-3 bg-gray-700/50 rounded-xl'>
                                    <View className='bg-green-900/40 p-2 rounded-lg mr-3'>
                                        <Icon name="upload" size={16} color="#4ADE80" />
                                    </View>
                                    <View className='flex-1'>
                                        <Text className='text-white font-medium'>File uploaded</Text>
                                        <Text className='text-gray-400 text-xs'>5 hours ago</Text>
                                    </View>
                                    <Text className='text-green-400 font-medium'>+850MB</Text>
                                </View>
                                <View className='flex-row items-center p-3 bg-gray-700/50 rounded-xl'>
                                    <View className='bg-purple-900/40 p-2 rounded-lg mr-3'>
                                        <Icon name="user-plus" size={16} color="#A78BFA" />
                                    </View>
                                    <View className='flex-1'>
                                        <Text className='text-white font-medium'>New user registered</Text>
                                        <Text className='text-gray-400 text-xs'>Yesterday</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </PageWraper>
        </View>
    )
}

export default HomeScreen