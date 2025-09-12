import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import FileUploadConfig from '../page/stack/upload/FileUploadConfig'
import FinalFainalUpload from '../page/stack/upload/FinalFainalUpload'
const Stack = createNativeStackNavigator()
const StackRoutes = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
            animation: "ios_from_right",
        }}>
            <Stack.Screen name='FileUploadConfig' component={FileUploadConfig} />
            <Stack.Screen name='FinalFainalUpload' component={FinalFainalUpload} />
        </Stack.Navigator>
    )
}

export default StackRoutes