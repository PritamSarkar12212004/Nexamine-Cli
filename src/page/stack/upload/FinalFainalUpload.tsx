import { View, Text, TouchableOpacity, ScrollView, Image, Switch } from 'react-native';
import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from '../../../components/icon/Icon';
import Slider from '@react-native-community/slider';

const FinalFainalUpload = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { data }: any = route.params;

  const [folderActive, setfolderActive] = useState<any>({
    title: 'Main',
    id: 1,
    Size: '400 MB',
  });

  const folderDataRiciver = (data: any) => {
    setfolderActive(data);
  };

  const folderData = [
    { title: 'Main', id: 1, Size: '400 MB' },
    { title: 'Important', id: 2, Size: '400 MB' },
    { title: 'Personal', id: 3, Size: '400 MB' },
  ];

  const Folder = ({ item }: { item: any }) => {
    const isActive = item?.id === folderActive?.id;

    return (
      <TouchableOpacity
        onPress={() => folderDataRiciver(item)}
        activeOpacity={0.85}
        className="rounded-2xl p-3"
        style={{
          width: 200,
          height: 180,
          backgroundColor: isActive ? '#5A4DAF' : '#4A3F3F',
          shadowColor: isActive ? '#8C79F0' : '#000',
          shadowOffset: { width: 0, height: 6 },
          shadowOpacity: 0.4,
          shadowRadius: 10,
          elevation: 10,
        }}
      >
        <View className="flex flex-row justify-between items-center mb-3">
          <View
            className="h-16 w-16 rounded-full flex items-center justify-center"
            style={{ backgroundColor: 'rgba(255, 165, 0, 0.2)' }}
          >
            <Icon name="file" color="#FFA500" size={24} />
          </View>
          <Icon name="ellipsis-vertical" color="gray" size={22} />
        </View>

        <View className="mt-auto">
          <Text className="text-white font-semibold text-lg" numberOfLines={1}>
            {item.title}
          </Text>
          <Text className="text-gray-300 text-sm">{item.Size}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const [encryptionEnabled, setEncryptionEnabled] = useState(true);
  const [compressionEnabled, setCompressionEnabled] = useState(true);
  const [sliderValue, setSliderValue] = useState(5); // 1–10 scale

  // map to ratio (0.1 → 1.0)
  const compressionRatio = (sliderValue / 10).toFixed(1);

  const navigateData = {
    compressionRatio, // pass the mapped ratio (string "0.1" – "1.0")
    data,
  };

  return (
    <View className="flex-1 bg-gray-900">
      <View className="w-screen h-screen flex flex-row">
        {/* Left side - folders + files */}
        <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
          <View className="flex flex-row flex-wrap gap-2 p-3">
            <View className="w-full flex flex-row items-center justify-between">
              <Text className="text-2xl font-semibold text-white/40">Folders</Text>
            </View>

            <View className="w-full flex flex-row gap-4">
              {/* Create Folder Card */}
              <TouchableOpacity
                activeOpacity={0.8}
                className="flex items-center justify-center rounded-2xl p-3"
                style={{
                  width: '32%',
                  height: 180,
                  backgroundColor: '#4A3F6F',
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 4 },
                  shadowOpacity: 0.3,
                  shadowRadius: 4.65,
                  elevation: 8,
                }}
              >
                <Icon name="plus" color="white" size={50} />
                <Text className="text-white mt-2 text-lg font-semibold">Create Folder</Text>
              </TouchableOpacity>

              {/* Folder List */}
              <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                <View className="flex-auto flex flex-row gap-3">
                  {folderData.map((item, index) => (
                    <Folder item={item} key={index} />
                  ))}
                </View>
              </ScrollView>
            </View>

            {/* Files */}
            <ScrollView showsVerticalScrollIndicator={false}>
              <View className="w-full flex flex-row flex-wrap gap-3 mt-5">
                {data.map((item: any, index: any) => (
                  <TouchableOpacity
                    activeOpacity={0.8}
                    key={index}
                    className="w-[32%] h-44 bg-gray-400 rounded-2xl overflow-hidden"
                  >
                    <Image source={{ uri: item }} className="w-full h-full" resizeMode="cover" />
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          </View>
        </ScrollView>

        {/* Right Sidebar */}
        <View className="w-96 h-full bg-white/10 backdrop-blur-xl border-l border-white/20 px-5 py-4">
          {/* Back Button */}
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="bg-zinc-900/30 w-full h-14 rounded-2xl flex flex-row items-center justify-center gap-3 shadow-lg"
            activeOpacity={0.8}
          >
            <Text className="text-lg font-semibold text-gray-300 ml-2">Back</Text>
          </TouchableOpacity>

          <ScrollView className="w-full mt-6" showsVerticalScrollIndicator={false}>
            {/* Encryption Switch */}
            <View className="flex-row justify-between items-center mb-6">
              <View>
                <Text className="text-white font-semibold text-lg">Encryption</Text>
                <Text className="text-gray-300 text-sm">Secure your files with encryption</Text>
              </View>
              <Switch
                value={encryptionEnabled}
                onValueChange={setEncryptionEnabled}
                trackColor={{ false: '#4A3F3F', true: '#6C5DD3' }}
                thumbColor={encryptionEnabled ? '#B9A1FF' : '#F1F1F1'}
              />
            </View>

            {/* Compression Switch */}
            <View className="flex-row justify-between items-center mb-4">
              <View>
                <Text className="text-white font-semibold text-lg">Compression</Text>
                <Text className="text-gray-300 text-sm">Compress your files to save space</Text>
              </View>
              <Switch
                value={compressionEnabled}
                onValueChange={setCompressionEnabled}
                trackColor={{ false: '#4A3F3F', true: '#6C5DD3' }}
                thumbColor={compressionEnabled ? '#B9A1FF' : '#F1F1F1'}
              />
            </View>

            {/* Compression Ratio Slider */}
            {compressionEnabled && (
              <View className="mt-4">
                <Text className="text-white font-semibold mb-2">
                  Compression Ratio: {compressionRatio}
                </Text>

                <Slider
                  minimumValue={1}
                  maximumValue={10}
                  step={1}
                  value={sliderValue}
                  onValueChange={(value) => setSliderValue(value)}
                  minimumTrackTintColor="#6C5DD3"
                  maximumTrackTintColor="#4A3F3F"
                  thumbTintColor="#B9A1FF"
                />

                <View className="flex-row justify-between mt-1">
                  <TouchableOpacity onPress={() => setSliderValue(Math.max(sliderValue - 1, 1))}>
                    <Text className="text-gray-300 text-sm">-</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setSliderValue(Math.min(sliderValue + 1, 10))}>
                    <Text className="text-gray-300 text-sm">+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}

            {/* Active Folder Info */}
            <View
              className="rounded-2xl p-3 flex items-center justify-between flex-row px-5 gap-5 mt-6"
              style={{
                width: '100%',
                height: 60,
                backgroundColor: '#5A4DAF',
                shadowColor: '#8C79F0',
                shadowOffset: { width: 0, height: 6 },
                shadowOpacity: 0.4,
                shadowRadius: 10,
                elevation: 10,
              }}
            >
              <View className="flex flex-row items-center justify-center gap-5">
                <Icon name="file" color="#FFA500" size={24} />
                <Text className="text-lg text-gray-200 font-semibold">{folderActive.title}</Text>
              </View>
              <Text className="text-gray-300">{folderActive.Size}</Text>
            </View>
          </ScrollView>

          {/* Upload Button */}
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('UploadingScreen', {
                data: navigateData,
              });
            }}
            className="bg-[#4f45b6] w-full h-14 rounded-2xl flex items-center justify-center flex-row shadow-lg mt-4"
            activeOpacity={0.8}
          >
            <Icon name="cloud" size={22} color="white" />
            <Text className="text-lg font-semibold text-white ml-2">Upload</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default FinalFainalUpload;
