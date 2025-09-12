import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerRoutes from './DrawerRoutes';
const Stack = createNativeStackNavigator();
const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='DrawerRoutes' screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name='DrawerRoutes' component={DrawerRoutes} options={{
          
        }}  />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes