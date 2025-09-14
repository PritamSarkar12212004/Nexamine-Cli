import { View, Text } from 'react-native'
import React from 'react'
import ColorGrediant from '../../../components/wraper/ColorGrediant'
import { useRoute } from '@react-navigation/native'

const FinalFainalUpload = () => {
  const route = useRoute()
  const { data } = route.params
  console.log(data)
  return (
    <ColorGrediant>
      <View>
        <Text>FinalFainalUpload</Text>
      </View>
    </ColorGrediant>
  )
}

export default FinalFainalUpload