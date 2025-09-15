// Compressor.ts
import { Image } from 'react-native-compressor';

const Compressor = async ({ path, lavel }: { path: any; lavel: number }) => {
  try {
    console.log('compress path', path);

    const result = await Image.compress(path, {
      compressionMethod: 'manual',
      maxWidth: 1000,
      quality: lavel,
    });

    return result;
  } catch (error) {
    console.log('Compression error: ', error);
    return null;
  }
};

export default Compressor;
