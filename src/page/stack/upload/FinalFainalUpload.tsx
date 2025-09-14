import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import DeviceInfo from 'react-native-device-info';
import ColorGrediant from '../../../components/wraper/ColorGrediant'
import RNFS from "react-native-fs";
import { useRoute } from '@react-navigation/native'
import { userContext } from '../../../utils/context/ContextProvider'

const FinalFainalUpload = () => {
  const { tokenContext } = userContext()
  const route = useRoute()
  const { data }: any = route.params

  const [ram, setRam] = useState("0 MB");
  const [totalRam, setTotoalRam] = useState<any>(null)
  const [totalCpu, setTotoalCpu] = useState(null)
  const [coverCpu, setCoverCpu] = useState(null)
  const deVideInfo = async () => {
    const TotoalRam = await DeviceInfo.getTotalMemory()
    const TotoalCpu = await DeviceInfo
    setTotoalRam((TotoalRam / 1024 / 1024).toFixed(2) + " MB")
  }
  useEffect(() => {
    deVideInfo()
    const interval = setInterval(async () => {
      const used = await DeviceInfo.getUsedMemory();
      setRam((used / 1024 / 1024).toFixed(2) + " MB");
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <ColorGrediant>
      <View>
        <Text>{ram} {totalRam}</Text>
      </View>
    </ColorGrediant>
  )
}

export default FinalFainalUpload