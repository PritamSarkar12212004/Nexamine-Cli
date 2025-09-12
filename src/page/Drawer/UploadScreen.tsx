import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import PageWraper from '../../components/wraper/PageWraper'
import Icon from '../../components/icon/Icon'
import { useNavigation } from '@react-navigation/native'

const UploadScreen = () => {
    const Navigation = useNavigation()
    const MediaFiles = [
        {
            Title: "Images",
            Dis: "JPG,PNG,GIF",
            Icon: "image",
            coloe: "#3B82F6",
            size: 20,
            Navigation: () => Navigation.navigate("StackRoutes", {
                screen: "FileUploadConfig",
                params: { data: "Photos" },
            })
        },
        {
            Title: "Audio",
            Dis: "MP3, WAV",
            Icon: "file-music",
            coloe: "#3B82F6",
            size: 20,
            Navigation: () => Navigation.navigate("StackRoutes" as never)
        },
        {
            Title: "Video",
            Dis: "MP4, MOV",
            Icon: "file-video",
            coloe: "#A855F7",
            size: 20,
            Navigation: () => Navigation.navigate("StackRoutes", {
                screen: "FileUploadConfig",
                params: { data: "Videos" },
            })
        },
        {
            Title: "Archive",
            Dis: "ZIP, RAR",
            Icon: "file-archive",
            coloe: "#6B7280",
            size: 20,
            Navigation: () => Navigation.navigate("StackRoutes" as never)
        },
    ]
    return (
        <View className="flex-1 bg-gray-900">
            <PageWraper>
                <ScrollView className='flex-1' showsVerticalScrollIndicator={false}>
                    <View className='flex-1 mt-5 mb-5 flex gap-6'>
                        <View className='w-full flex flex-row items-center justify-center gap-1'>
                            <View className='flex flex-row items-center justify-center gap-1'>
                                <View className='h-12 w-12 bg-zinc-500/20 rounded-full flex items-center justify-center'>
                                    <Icon name='file' color='orange' size={16} />
                                </View>
                                <View className='w-12 h-1.5 bg-zinc-500/20 rounded-2xl'></View>
                            </View>
                            <View className='flex flex-row items-center justify-center gap-1'>
                                <View className='h-12 w-12 bg-zinc-500/20 rounded-full flex items-center justify-center'>
                                    <Icon name='shield' color='green' size={16} />
                                </View>
                                <View className='w-12 h-1.5 bg-zinc-500/20 rounded-2xl'></View>
                            </View>
                            <View className='flex flex-row items-center justify-center gap-1'>
                                <View className='h-12 w-12 bg-zinc-500/20 rounded-full flex items-center justify-center'>
                                    <Icon name='cloud' color='#2868ED' size={16} />
                                </View>
                                <View className='w-12 h-1.5 bg-zinc-500/20 rounded-2xl'></View>
                            </View>
                            <View className='flex flex-row items-center justify-center gap-1'>
                                <View className='h-12 w-12 bg-zinc-500/20 rounded-full flex items-center justify-center'>
                                    <Icon name='circle-check' color='#E63D8E' size={16} />
                                </View>
                            </View>
                        </View>
                        <View className='w-full flex items-center'>
                            <View className='flex items-center'>
                                <Text className='text-2xl text-white'>Select Files</Text>
                                <Text className='text-base text-white/30'>Choose files to upload securely</Text>
                            </View>
                        </View>
                        <View className='w-full'>
                            <Text className='text-lg text-white mb-3'>Media Files</Text>
                            <View className='w-full flex flex-row flex-wrap justify-between'>
                                {
                                    MediaFiles.map((item, index) => {
                                        return <TouchableOpacity onPress={() => item.Navigation()} activeOpacity={0.8} key={index} className='bg-zinc-500/20 w-[48%] h-32 rounded-2xl flex items-center justify-center p-3 mb-3'>
                                            <View className='w-12 h-12 bg-gray-500/20 rounded-full flex items-center justify-center mb-2'>
                                                <Icon name={item.Icon} color={item.coloe} size={20} />
                                            </View>
                                            <Text className='text-white text-center font-medium'>{item.Title}</Text>
                                            <Text className='text-white/50 text-xs text-center mt-1'>{item.Dis}</Text>
                                        </TouchableOpacity>
                                    })
                                }
                            </View>
                        </View>

                        <View className='w-full'>
                            <Text className='text-lg text-white mb-3'>Document Files</Text>
                            <View className='w-full flex flex-row flex-wrap justify-between'>
                                <TouchableOpacity className='bg-zinc-500/20 w-[48%] h-32 rounded-2xl flex items-center justify-center p-3 mb-3'>
                                    <View className='w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mb-2'>
                                        <Icon name='file-pdf' color='#F40F02' size={20} />
                                    </View>
                                    <Text className='text-white text-center font-medium'>PDF</Text>
                                    <Text className='text-white/50 text-xs text-center mt-1'>Documents</Text>
                                </TouchableOpacity>

                                <TouchableOpacity className='bg-zinc-500/20 w-[48%] h-32 rounded-2xl flex items-center justify-center p-3 mb-3'>
                                    <View className='w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mb-2'>
                                        <Icon name='file-word' color='#2563EB' size={20} />
                                    </View>
                                    <Text className='text-white text-center font-medium'>Word</Text>
                                    <Text className='text-white/50 text-xs text-center mt-1'>DOC, DOCX</Text>
                                </TouchableOpacity>

                                <TouchableOpacity className='bg-zinc-500/20 w-[48%] h-32 rounded-2xl flex items-center justify-center p-3'>
                                    <View className='w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center mb-2'>
                                        <Icon name='file-excel' color='#16A34A' size={20} />
                                    </View>
                                    <Text className='text-white text-center font-medium'>Excel</Text>
                                    <Text className='text-white/50 text-xs text-center mt-1'>XLS, XLSX</Text>
                                </TouchableOpacity>

                                <TouchableOpacity className='bg-zinc-500/20 w-[48%] h-32 rounded-2xl flex items-center justify-center p-3'>
                                    <View className='w-12 h-12 bg-orange-600/20 rounded-full flex items-center justify-center mb-2'>
                                        <Icon name='file-powerpoint' color='#EA580C' size={20} />
                                    </View>
                                    <Text className='text-white text-center font-medium'>PowerPoint</Text>
                                    <Text className='text-white/50 text-xs text-center mt-1'>PPT, PPTX</Text>
                                </TouchableOpacity>
                            </View>
                        </View>


                        {/* Other Files Section */}
                        <View className='w-full'>
                            <Text className='text-lg text-white mb-3'>Other Files</Text>
                            <View className='w-full flex flex-row flex-wrap justify-between'>
                                {/* Text Files */}
                                <TouchableOpacity className='bg-zinc-500/20 w-[48%] h-32 rounded-2xl flex items-center justify-center p-3 mb-3'>
                                    <View className='w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center mb-2'>
                                        <Icon name='file-text' color='#06B6D4' size={20} />
                                    </View>
                                    <Text className='text-white text-center font-medium'>Text Files</Text>
                                    <Text className='text-white/50 text-xs text-center mt-1'>TXT, RTF</Text>
                                </TouchableOpacity>

                                {/* Code Files */}
                                <TouchableOpacity className='bg-zinc-500/20 w-[48%] h-32 rounded-2xl flex items-center justify-center p-3 mb-3'>
                                    <View className='w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mb-2'>
                                        <Icon name='code' color='#EAB308' size={20} />
                                    </View>
                                    <Text className='text-white text-center font-medium'>Code</Text>
                                    <Text className='text-white/50 text-xs text-center mt-1'>JS, HTML, CSS</Text>
                                </TouchableOpacity>

                                {/* Other Files */}
                                <TouchableOpacity className='bg-zinc-500/20 w-[48%] h-32 rounded-2xl flex items-center justify-center p-3'>
                                    <View className='w-12 h-12 bg-pink-500/20 rounded-full flex items-center justify-center mb-2'>
                                        <Icon name='file' color='#EC4899' size={20} />
                                    </View>
                                    <Text className='text-white text-center font-medium'>Other Files</Text>
                                    <Text className='text-white/50 text-xs text-center mt-1'>Various formats</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </PageWraper>
        </View>
    )
}

export default UploadScreen