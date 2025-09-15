import { useState, useEffect, useRef } from 'react';
import { NativeModules } from 'react-native';

const { NetworkSpeed } = NativeModules;

export const useNetworkSpeed = (interval: number = 1000) => {
  const [download, setDownload] = useState(0); // KB/s
  const [upload, setUpload] = useState(0); // KB/s

  const prevRx = useRef(0);
  const prevTx = useRef(0);

  useEffect(() => {
    const timer = setInterval(async () => {
      try {
        const bytes = await NetworkSpeed.getNetworkBytes();
        const downloadSpeed = (bytes.rx - prevRx.current) / 1024;
        const uploadSpeed = (bytes.tx - prevTx.current) / 1024;

        prevRx.current = bytes.rx;
        prevTx.current = bytes.tx;

        setDownload(Math.round(downloadSpeed));
        setUpload(Math.round(uploadSpeed));
      } catch (e) {
        console.error('Error fetching network speed:', e);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [interval]);

  return { download, upload };
};
