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
            Navigation: () => Navigation.navigate("StackRoutes", {
                screen: "FileDocumentPicker",
                params: { data: "Audio" }
            })
        },
        {
            Title: "Video",
            Dis: "MP4, MOV",
            Icon: "file-video",
            coloe: "#A855F7",
            size: 20,
            Navigation: () => Navigation.navigate("StackRoutes", {
                screen: "FileDocumentPicker",
                params: { data: "Video" },
            })
        },
        {
            Title: "Archive",
            Dis: "ZIP, RAR",
            Icon: "file-archive",
            coloe: "#6B7280",
            size: 20,
            Navigation: () => Navigation.navigate("StackRoutes", {
                screen: "FileDocumentPicker",
                params: { data: "Archive" },
            })
        },
    ]
    const DocumentFiles = [
        {
            Title: "PDF",
            Dis: "Documents",
            Icon: "file-pdf",
            coloe: "#F40F02",
            size: 20,
            Navigation: () =>
                Navigation.navigate("StackRoutes", {
                    screen: "FileDocumentPicker",
                    params: { data: "PDF" },
                }),
        },
        {
            Title: "Word",
            Dis: "DOC, DOCX",
            Icon: "file-word",
            coloe: "#2563EB",
            size: 20,
            Navigation: () =>
                Navigation.navigate("StackRoutes", {
                    screen: "FileDocumentPicker",
                    params: { data: "Word" },
                }),
        },
        {
            Title: "Excel",
            Dis: "XLS, XLSX",
            Icon: "file-excel",
            coloe: "#16A34A",
            size: 20,
            Navigation: () =>
                Navigation.navigate("StackRoutes", {
                    screen: "FileDocumentPicker",
                    params: { data: "Excel" },
                }),
        },
        {
            Title: "PowerPoint",
            Dis: "PPT, PPTX",
            Icon: "file-powerpoint",
            coloe: "#EA580C",
            size: 20,
            Navigation: () =>
                Navigation.navigate("StackRoutes", {
                    screen: "FileDocumentPicker",
                    params: { data: "PowerPoint" },
                }),
        },
    ];
    const OtherFiles = [
        {
            Title: "Text Files",
            Dis: "TXT, RTF",
            Icon: "file-text",
            bgColor: "#06B6D4", // cyan
            bgOpacity: "bg-cyan-500/20",
            size: 20,
            Navigation: () =>
                Navigation.navigate("StackRoutes", {
                    screen: "FileDocumentPicker",
                    params: { data: "Text Files" },
                }),
        },
        {
            Title: "Code",
            Dis: "JS, HTML, CSS",
            Icon: "code",
            bgColor: "#EAB308", // yellow
            bgOpacity: "bg-yellow-500/20",
            size: 20,
            Navigation: () =>
                Navigation.navigate("StackRoutes", {
                    screen: "FileDocumentPicker",
                    params: { data: "Code" },
                }),
        },
        {
            Title: "Other Files",
            Dis: "Various formats",
            Icon: "file",
            bgColor: "#EC4899", // pink
            bgOpacity: "bg-pink-500/20",
            size: 20,
            Navigation: () =>
                Navigation.navigate("StackRoutes", {
                    screen: "FileDocumentPicker",
                    params: { data: "Other" },
                }),
        },
    ];
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
                                {
                                    DocumentFiles.map((item, index) => {
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
                        {/* Other Files Section */}
                        <View className='w-full'>
                            <Text className='text-lg text-white mb-3'>Other Files</Text>
                            <View className='w-full flex flex-row flex-wrap justify-between'>
                                {
                                    OtherFiles.map((item, index) => {
                                        return <TouchableOpacity onPress={() => item.Navigation()} activeOpacity={0.8} key={index} className='bg-zinc-500/20 w-[48%] h-32 rounded-2xl flex items-center justify-center p-3 mb-3'>
                                            <View className='w-12 h-12 bg-gray-500/20 rounded-full flex items-center justify-center mb-2'>
                                                <Icon name={item.Icon} color={item.bgColor} size={20} />
                                            </View>
                                            <Text className='text-white text-center font-medium'>{item.Title}</Text>
                                            <Text className='text-white/50 text-xs text-center mt-1'>{item.Dis}</Text>
                                        </TouchableOpacity>
                                    })
                                }
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </PageWraper>
        </View>
    )
}

export default UploadScreen