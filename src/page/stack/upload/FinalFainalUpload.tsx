import { View, Text, NativeModules } from 'react-native'
import React, { useEffect, useState } from 'react'
import DeviceInfo from 'react-native-device-info'
import ColorGrediant from '../../../components/wraper/ColorGrediant'
import { useRoute } from '@react-navigation/native'
import { userContext } from '../../../utils/context/ContextProvider'
const { SystemRam } = NativeModules

const FinalFainalUpload = () => {
  const getSystemRam = async () => {
    try {
      const ram = await SystemRam.getSystemMemory();
      console.log("Total RAM:", (ram.total / 1024 / 1024).toFixed(2), "MB");
      console.log("Used RAM:", (ram.used / 1024 / 1024).toFixed(2), "MB");
    } catch (e) {
      console.error("Error fetching system RAM:", e);
    }
  };
  // const { tokenContext } = userContext()
  // const route = useRoute()
  // const { data }: any = route.params

  // const [ram, setRam] = useState("0 MB")
  // const [totalRamUge, setTotoalRamUge] = useState<string | null>(null)

  // const deVideInfo = async () => {
  //   const TotoalRam = await DeviceInfo.getTotalMemory()
  //   setTotoalRamUge((TotoalRam / 1024 / 1024).toFixed(2) + " MB")
  // }

  // useEffect(() => {
  //   deVideInfo()

  //   const interval = setInterval(() => {
  //     const used = DeviceInfo.getUsedMemory().then((result) => {
  //       console.log(result)
  //       setRam((result / 1024 / 1024).toFixed(2) + " MB")

  //     }).catch((err) => {

  //     });
  //   }, 1000) 

  //   return () => clearInterval(interval) // cleanup karna zaroori hai
  // }, [])
  useEffect(() => {
    getSystemRam()
  }, [])
  return (
    <ColorGrediant>
      <View>
        {/* <Text>{ram} (Used RAM)</Text>
        <Text>{totalRamUge} (Total RAM)</Text> */}
      </View>
    </ColorGrediant>
  )
}

export default FinalFainalUpload
