import { View, Text, Image, ScrollView, TouchableOpacity, Modal, useWindowDimensions, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { CameraRoll } from '@react-native-camera-roll/camera-roll';
import Icon from '../../../components/icon/Icon';
import { useNavigation, useRoute } from '@react-navigation/native';

const FileUploadConfig = () => {
  const [data, setdata] = useState<any>([]);
  const [selected, setSelected] = useState<any>([]);
  const [modal, setModal] = useState<any>(false);
  const [modalimg, setModalImg] = useState<any>(null);
  const navigation = useNavigation()
  const { width: screenWidth, height: screenHeight } = useWindowDimensions();
  const route = useRoute()
  const handleButtonPress = () => {
    CameraRoll.getPhotos({
      first: 40,
      assetType: route.params?.data
    })
      .then(r => setdata(r.edges))
      .catch(err => console.log("Error loading images:", err));
  };
  const setImageFunc = (uri: any) => {
    if (!selected.includes(uri)) {
      setSelected((prev: any) => [...prev, uri]);
    }
  };

  const removeImage = (index: number) => {
    setSelected((prev: any) => prev.filter((_: any, i: number) => i !== index));
  };

  const ModalFunc = (uri: any) => {
    setModalImg(uri);
    setModal(true);
  };

  useEffect(() => {
    handleButtonPress();

  }, []);

  return (
    <View className='flex-1 bg-gray-900'>
      <Modal transparent visible={modal} animationType="fade">
        <View className="flex-1 bg-black/90 items-center justify-center">
          <TouchableOpacity
            onPress={() => setModal(false)}
            className="absolute top-10 right-6 bg-black/70 p-3 rounded-full z-50"
          >
            <Icon name="x" size={22} color="white" />
          </TouchableOpacity>
          {modalimg ? (
            <Image
              source={{ uri: modalimg }}
              style={{
                width: screenWidth * 0.95,
                height: screenHeight * 0.8,
              }}
              resizeMode="contain"
            />
          ) : <View className='flex-1 flex items-center justify-center'> <ActivityIndicator color="orange" size={30} /></View>}
        </View>
      </Modal>
      <View className="w-screen h-screen flex flex-row">
        <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
          <View className="flex flex-row flex-wrap gap-3 p-3">
            {data.map((item: any, index: any) => (
              <TouchableOpacity
                key={index}
                activeOpacity={0.8}
                onPress={() => setImageFunc(item.node.image.uri)}
                onLongPress={() => ModalFunc(item.node.image.uri)}
                className="rounded-2xl overflow-hidden shadow-md"
              >
                <Image
                  source={{ uri: item.node.image.uri }}
                  className="h-40 w-40"
                  resizeMode="cover"
                />
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
        <View className="w-96 h-full bg-white/10 backdrop-blur-xl border-l border-white/20 px-5 py-4">
          <TouchableOpacity onPress={() => navigation.goBack()}
            className=" bg-zinc-900/30 gap-3 w-full h-14 rounded-2xl flex items-center justify-center flex-row shadow-lg"
            activeOpacity={0.8}
          >
            <Text className="text-lg font-semibold text-gray-300 ml-2">Back</Text>
          </TouchableOpacity>

          <Text className="text-base text-white mt-4 font-medium">
            Selected Files {selected.length}
          </Text>
          <ScrollView className="w-full mt-3" showsVerticalScrollIndicator={false}>
            <View className="flex flex-row flex-wrap gap-3">
              {selected.length === 0 ? (
                <Text className="text-gray-300 text-sm">No files selected</Text>
              ) : (
                selected.map((item: any, index: number) => (
                  <TouchableOpacity
                    onPress={() => removeImage(index)}
                    activeOpacity={0.8}
                    key={index}
                    className="relative w-[48%] h-36 rounded-xl overflow-hidden shadow-md"
                  >
                    <Image
                      source={{ uri: item }}
                      className="h-full w-full"
                      resizeMode="cover"
                    />
                  </TouchableOpacity>
                ))
              )}
              {
                selected.length > 0 && <TouchableOpacity
                  className="bg-[#4f45b6] w-full h-14 rounded-2xl flex items-center justify-center flex-row shadow-lg"
                  activeOpacity={0.8}
                >
                  <Icon name="cloud" size={22} color="white" />
                  <Text className="text-lg font-semibold text-white ml-2">Upload</Text>
                </TouchableOpacity>
              }

            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default FileUploadConfig;
