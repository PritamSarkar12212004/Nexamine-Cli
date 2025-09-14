import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import RNFS from 'react-native-fs';
import ColorGrediant from '../../../components/wraper/ColorGrediant';
import Icon from '../../../components/icon/Icon';
import { useNavigation } from '@react-navigation/native';

const FileDocumentPicker = () => {
  const [files, setFiles] = useState([]);
  const [audio, setaudio] = useState<any>([])
  const setAduioFunc = async ({ path, name }: {
    path: string,
    name: string
  }) => {
    const obj = {
      path,
      name
    }
    setaudio((pre: any) => [...pre, obj])
  }

  const removeAudio = (index: number) => {
    console.log(index)
    setaudio((prev: any) => prev.filter((_: any, i: number) => i !== index));
  };

  const navigation = useNavigation()
  useEffect(() => {
    const readDownloads = async () => {
      try {
        const result = await RNFS.readDir(RNFS.DownloadDirectoryPath);
        const audioFiles = result.filter((file) => {
          return (
            file.isFile() &&
            (file.name.endsWith('.mp3') ||
              file.name.endsWith('.wav') ||
              file.name.endsWith('.m4a') ||
              file.name.endsWith('.aac') ||
              file.name.endsWith('.flac'))
          );
        });
        setFiles(audioFiles);
      } catch (error) {
        console.log('Error reading folder:', error);
      }
    };

    readDownloads();
  }, []);

  return (
    <ColorGrediant>
      <View className="w-screen h-screen flex flex-row">
        <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
          <View className="flex flex-row flex-wrap gap-3 p-3">
            {
              files.map((item, index) => {
                return <TouchableOpacity activeOpacity={0.8} onPress={() => setAduioFunc({
                  path: item.path,
                  name: item.name
                })} key={index} className='h-48 w-48 bg-zinc-500/20 rounded-3xl items-center justify-between px-3 py-3'>
                  <Icon name='headphones' color='gray' size={50} />
                  <View className='w-full'>
                    <TouchableOpacity activeOpacity={0.8} className='w-full h-10 flex items-center justify-center bg-[#4f45b6]/70 rounded-3xl mb-2'>
                      <Text className='text-gray-200'>
                        Play
                      </Text>
                    </TouchableOpacity>
                    <Text className=' text-gray-100 text-center'>
                      {
                        item?.name
                      }
                    </Text>
                  </View>

                </TouchableOpacity>
              })
            }
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
            Selected Files
          </Text>
          <ScrollView className="w-full mt-3" showsVerticalScrollIndicator={false}>
            <View className="flex flex-row flex-wrap gap-3">
              {audio.length === 0 ? (
                <Text className="text-gray-300 text-sm">No files audio</Text>
              ) : (
                audio.map((item: any, index: number) => (
                  <View
                    key={index}
                    className="relative w-[48%] h-36 rounded-xl overflow-hidden shadow-md"
                  >
                    <TouchableOpacity activeOpacity={0.8} key={index} className='h-36 w-36 bg-zinc-500/20 rounded-3xl items-center justify-between p-5' onPress={() => removeAudio(index)}
                    >
                      <Icon name='headphones' color='gray' size={30} />
                      <View className='w-full'>

                        <Text className='text-sm text-gray-100 text-center'>
                          {
                            item?.name
                          }
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                ))
              )}
              {
                audio.length > 0 && <TouchableOpacity
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
      </View >
    </ColorGrediant >
  );
};

export default FileDocumentPicker;
