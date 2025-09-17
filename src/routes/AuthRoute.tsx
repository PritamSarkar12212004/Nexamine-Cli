import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginPage from '../page/auth/LoginPage'
import LoginReg from '../page/auth/LoginReg'
const Stack = createNativeStackNavigator()
const AuthRoute = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
            animation: "slide_from_bottom",
        }} initialRouteName='LoginPage'>
            <Stack.Screen name='LoginPage' component={LoginPage} />
            <Stack.Screen name='LoginReg' component={LoginReg} />

        </Stack.Navigator>
    )
}

export default AuthRoute