import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginPage from '../page/auth/LoginPage'
import LoginReg from '../page/auth/LoginReg'
import LoginVarify from '../page/auth/LoginVarify'
const Stack = createNativeStackNavigator()
const AuthRoute = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
            animation: "slide_from_bottom",
        }} initialRouteName='LoginVarify'>
            <Stack.Screen name='LoginPage' component={LoginPage} />
            <Stack.Screen name='LoginReg' component={LoginReg} />
            <Stack.Screen name='LoginVarify' component={LoginVarify} />

        </Stack.Navigator>
    )
}

export default AuthRoute