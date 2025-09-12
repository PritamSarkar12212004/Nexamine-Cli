import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../page/Drawer/HomeScreen';
import DrawerNavigationProps from '../components/navigationProps/DrawerNavigationProps';
import GrediantColor from '../constants/colors/GrediantColor';
import AnalizeScreen from '../page/Drawer/AnalizeScreen';
import StorageScreen from '../page/Drawer/StorageScreen';
import UploadScreen from '../page/Drawer/UploadScreen';
import SettingScreen from '../page/Drawer/SettingScreen';
import ProfileScreen from '../page/Drawer/ProfileScreen';
const Drawer = createDrawerNavigator();
export default function DrawerRoutes() {
    return (
        <View style={{ flex: 1, backgroundColor: GrediantColor.firstColor }}>
            <Drawer.Navigator
                drawerContent={(props) => <DrawerNavigationProps {...props} />}
                screenOptions={{
                    headerShown: false,
                    drawerType: 'permanent',
                    drawerStyle: {
                        width: 100,
                        height: "100%",
                        borderRightWidth: 0.3,
                        borderColor: "#2E293E",
                        display: "flex",
                        alignContent: "center",
                        justifyContent: "center"

                    },
                }}
                initialRouteName="Home"
            >
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="AnalizeScreen" component={AnalizeScreen} />
                <Drawer.Screen name="StorageScreen" component={StorageScreen} />
                <Drawer.Screen name="UploadScreen" component={UploadScreen} />
                <Drawer.Screen name="SettingScreen" component={SettingScreen} />
                <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />

            </Drawer.Navigator>
        </View>
    );
}
