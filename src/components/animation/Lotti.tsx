import React from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

interface LottiProps {
    path: string;
    height?: number;
    width?: number;
    backgroundColor?: string;
}

export default function Lotti({
    path,
    height = 200,
    width = 200,
    backgroundColor = 'transparent',
}: LottiProps) {
    return (
        <View style={[styles.container, { height, width, backgroundColor }]}>
            <LottieView autoPlay loop
                source={path}
                style={{ height: '100%', width: '100%' }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10, // optional: smooth edges
    },
});
