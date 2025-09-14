import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import RNFS from 'react-native-fs';
import ColorGrediant from '../../../components/wraper/ColorGrediant';
import Icon from '../../../components/icon/Icon';
import { useNavigation, useRoute } from '@react-navigation/native';

const FileDocumentPicker = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [files, setFiles] = useState<any[]>([]);
  const [selectedFiles, setSelectedFiles] = useState<any[]>([]);

  const setFileFunc = ({ path, name }: { path: string; name: string }) => {
    const isAlreadySelected = selectedFiles.some((file) => file.path === path);
    if (!isAlreadySelected) {
      setSelectedFiles((prev) => [...prev, { path, name }]);
    }
  };

  const removeFile = (index: number) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  useEffect(() => {
    const readDownloads = async () => {
      try {
        const result = await RNFS.readDir(RNFS.DownloadDirectoryPath);
        let fileExtensions: string[] = [];

        switch (route.params?.data) {
          case 'Audio':
            fileExtensions = ['.mp3', '.wav', '.m4a', '.aac', '.flac'];
            break;
          case 'Video':
            fileExtensions = ['.mp4', '.mov', '.mkv', '.avi'];
            break;
          case 'Archive':
            fileExtensions = ['.zip', '.rar'];
            break;
          case 'PDF':
            fileExtensions = ['.pdf'];
            break;
          case 'Word':
            fileExtensions = ['.doc', '.docx'];
            break;
          case 'Excel':
            fileExtensions = ['.xls', '.xlsx'];
            break;
          case 'PowerPoint':
            fileExtensions = ['.ppt', '.pptx'];
            break;
          case 'Text':
            fileExtensions = ['.txt', '.rtf'];
            break;
          case 'Code':
            fileExtensions = ['.js', '.ts', '.py', '.java', '.c', '.cpp'];
            break;
          default:
            fileExtensions = [];
        }

        const filteredFiles = result.filter(
          (file) => file.isFile() && fileExtensions.some((ext) => file.name.endsWith(ext))
        );

        setFiles(filteredFiles);
      } catch (error) {
        console.log('Error reading folder:', error);
      }
    };

    readDownloads();
    return (() => {
      setSelectedFiles([])
      setFiles([])
    })
  }, [route.params?.data]);

  const renderIcon = () => {
    switch (route.params?.data) {
      case 'Audio':
        return 'headphones';
      case 'Video':
        return 'video';
      case 'Archive':
        return 'archive';
      case 'PDF':
        return 'file-pdf';
      case 'Word':
        return 'file-word';
      case 'Excel':
        return 'file-excel';
      case 'PowerPoint':
        return 'file-powerpoint';
      case 'Text':
        return 'file-text';
      case 'Code':
        return 'code';
      default:
        return 'file';
    }
  };

  const iconBgColor = () => {
    switch (route.params?.data) {
      case 'Audio':
        return 'bg-purple-500/30';
      case 'Video':
        return 'bg-red-500/30';
      case 'Archive':
        return 'bg-yellow-500/30';
      case 'PDF':
        return 'bg-red-600/30';
      case 'Word':
        return 'bg-blue-500/30';
      case 'Excel':
        return 'bg-green-500/30';
      case 'PowerPoint':
        return 'bg-orange-500/30';
      case 'Text':
        return 'bg-gray-500/30';
      case 'Code':
        return 'bg-indigo-500/30';
      default:
        return 'bg-gray-400/30';
    }
  };

  return (
    <ColorGrediant>
      <View className="w-screen h-screen flex flex-row">
        <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
          <View className="flex flex-row flex-wrap gap-3 p-3">
            {files.map((item, index) => (
              <TouchableOpacity
                key={index}
                activeOpacity={0.8}
                onPress={() => setFileFunc({ path: item.path, name: item.name })}
                className="h-44 w-44 bg-white/10 backdrop-blur-md rounded-2xl items-center justify-center p-4 flex-col shadow-md"
              >
                <View className={`h-16 w-16 rounded-full items-center justify-center mb-3 ${iconBgColor()}`}>
                  <Icon name={renderIcon()} color="white" size={30} />
                </View>
                <Text className="text-gray-100 text-center text-sm" numberOfLines={2} ellipsizeMode="tail">
                  {item.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

        <View className="w-96 h-full bg-white/10 backdrop-blur-xl border-l border-white/20 px-5 py-4">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="bg-zinc-900/30 w-full h-14 rounded-2xl flex items-center justify-center flex-row shadow-lg"
            activeOpacity={0.8}
          >
            <Text className="text-lg font-semibold text-gray-300 ml-2">Back</Text>
          </TouchableOpacity>

          <Text className="text-base text-white mt-4 font-medium">Selected Files</Text>
          <ScrollView showsVerticalScrollIndicator={false} className="w-full mt-3">
            <View className="flex flex-row flex-wrap gap-3">
              {selectedFiles.length === 0 ? (
                <Text className="text-gray-300 text-sm">No files selected</Text>
              ) : (
                selectedFiles.map((item, index) => (
                  <View
                    key={index}
                    className="relative w-[48%] h-36 rounded-xl overflow-hidden shadow-md"
                  >
                    <TouchableOpacity
                      activeOpacity={0.8}
                      className="h-36 w-36 bg-white/10 backdrop-blur-md rounded-2xl items-center justify-center p-4 flex-col"
                      onPress={() => removeFile(index)}
                    >
                      <View className={`h-12 w-12 rounded-full items-center justify-center mb-2 ${iconBgColor()}`}>
                        <Icon name={renderIcon()} color="white" size={25} />
                      </View>
                      <Text className="text-sm text-gray-100 text-center" numberOfLines={2} ellipsizeMode="tail">
                        {item.name}
                      </Text>
                    </TouchableOpacity>
                  </View>
                ))
              )}

              {selectedFiles.length > 0 && (
                <TouchableOpacity
                  className="bg-[#4f45b6] w-full h-14 rounded-2xl flex items-center justify-center flex-row shadow-lg mt-3"
                  activeOpacity={0.8}
                >
                  <Icon name="cloud" size={22} color="white" />
                  <Text className="text-lg font-semibold text-white ml-2">Upload</Text>
                </TouchableOpacity>
              )}
            </View>
          </ScrollView>
        </View>
      </View>
    </ColorGrediant>
  );
};

export default FileDocumentPicker;
