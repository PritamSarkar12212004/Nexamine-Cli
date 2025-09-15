import { View, Text, NativeModules } from 'react-native';
import React, { useState } from 'react';

const useRamChaker = () => {
  const { SystemRam } = NativeModules;
  const [usedRamPercent, setUsedRamPercent] = useState<number | null>(null);

  const getSystemRam = async () => {
    const ram = await SystemRam.getSystemMemory();
    const used = (ram.used / ram.total) * 100;
    setUsedRamPercent(Math.round(used));
  };

  return {
    getSystemRam,
    usedRamPercent,
  };
};

export default useRamChaker;
