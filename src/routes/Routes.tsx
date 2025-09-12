import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerRoutes from './DrawerRoutes';
import StackRoutes from './StackRoutes';
const Stack = createNativeStackNavigator();
const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='DrawerRoutes' screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name='DrawerRoutes' component={DrawerRoutes} options={{
        }} />
        <Stack.Screen name='StackRoutes' component={StackRoutes} options={{
          animation: "ios_from_right",
          headerShown: false
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes