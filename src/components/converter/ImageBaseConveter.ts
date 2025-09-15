import RNFS from 'react-native-fs';

const ImageBaseConveter = async ({ imagePaths }: any) => {
  try {
    const base64Array = [];
    for (const path of imagePaths) {
      const base64String = await RNFS.readFile(path, 'base64');
      base64Array.push({
        path,
        base64: base64String,
      });
    }

    return base64Array;
  } catch (error) {
    console.error('Base64 conversion error:', error);
    return [];
  }
};
export default ImageBaseConveter;
