import { StyleSheet } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import GrediantColor from '../../constants/colors/GrediantColor';


const ColorGrediant = ({ children }: any) => {
    return (
        <LinearGradient colors={[GrediantColor.firstColor, GrediantColor.firstColor, GrediantColor.firstColor]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.linearGradient}>
            {
                children
            }
        </LinearGradient>
    )
}
export default ColorGrediant
const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
    },
});