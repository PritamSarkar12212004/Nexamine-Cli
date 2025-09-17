import React, { useState, useRef } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Animated,
    Alert,
    Keyboard,
    SafeAreaView,
    StatusBar
} from 'react-native';
import { OtpInput } from "react-native-otp-entry";

const OtpInputScreen = () => {
    const [otp, setOtp] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const shakeAnimation = useRef(new Animated.Value(0)).current;

    const startShake = () => {
        Animated.sequence([
            Animated.timing(shakeAnimation, { toValue: 10, duration: 100, useNativeDriver: true }),
            Animated.timing(shakeAnimation, { toValue: -10, duration: 100, useNativeDriver: true }),
            Animated.timing(shakeAnimation, { toValue: 10, duration: 100, useNativeDriver: true }),
            Animated.timing(shakeAnimation, { toValue: 0, duration: 100, useNativeDriver: true })
        ]).start();
    };

    const handleFilled = (text) => {
        console.log(`OTP is ${text}`);
        // For demo purposes, let's assume the correct OTP is 1234
        if (text === '1234') {
            Alert.alert('Success', 'OTP verified successfully!');
        } else {
            startShake();
            Alert.alert('Error', 'Invalid OTP. Please try again.');
        }
    };

    const handleResendOtp = () => {
        Alert.alert('OTP Sent', 'A new OTP has been sent to your phone.');
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="light-content" backgroundColor="#2E293E" />
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>Verification Code</Text>
                    <Text style={styles.subtitle}>
                        Enter the 4-digit code sent to your phone number
                    </Text>
                </View>

                <Animated.View style={[styles.otpContainer, { transform: [{ translateX: shakeAnimation }] }]}>
                    <OtpInput
                        numberOfDigits={4}
                        focusColor="#A78BFA"
                        autoFocus={true}
                        hideStick={false}
                        placeholder="0"
                        blurOnFilled={false}
                        disabled={false}
                        type="numeric"
                        secureTextEntry={false}
                        focusStickBlinkingDuration={500}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        onTextChange={(text) => setOtp(text)}
                        onFilled={handleFilled}
                        theme={{
                            pinCodeContainerStyle: styles.pinCodeContainer,
                            pinCodeTextStyle: styles.pinCodeText,
                            focusStickStyle: styles.focusStick,
                            focusedPinCodeContainerStyle: styles.activePinCodeContainer,
                            filledPinCodeContainerStyle: styles.filledPinCodeContainer,
                        }}
                    />
                </Animated.View>

                <View style={styles.footer}>
                    {/* <TouchableOpacity style={styles.resendButton} onPress={handleResendOtp}>
                        <Text style={styles.resendText}>Didn't receive the code? </Text>
                        <Text style={[styles.resendText, styles.resendLink]}>Resend</Text>
                    </TouchableOpacity> */}

                    <TouchableOpacity
                        style={[styles.submitButton, { opacity: otp.length === 4 ? 1 : 0.6 }]}
                        onPress={() => handleFilled(otp)}
                        disabled={otp.length !== 4}
                    >
                        <Text style={styles.submitText}>Verify & Continue</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#2E293E',
    },
    container: {
        flex: 1,
        backgroundColor: '#2E293E',
        padding: 24,
        justifyContent: 'space-between',
    },
    header: {
        alignItems: 'center',
        marginTop: 40,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFF',
        marginBottom: 16,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        color: '#A78BFA',
        textAlign: 'center',
        lineHeight: 24,
        maxWidth: 300,
    },
    otpContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 40,
    },
    pinCodeContainer: {
        backgroundColor: '#4A4458',
        borderWidth: 0,
        borderRadius: 12,
        width: 60,
        height: 70,
        marginHorizontal: 8,
    },
    pinCodeText: {
        color: '#FFF',
        fontSize: 24,
        fontWeight: '600',
    },
    focusStick: {
        backgroundColor: '#A78BFA',
        width: 2,
        height: 30,
    },
    activePinCodeContainer: {
        backgroundColor: '#4A4458',
        borderWidth: 1,
        borderColor: '#A78BFA',
        transform: [{ scale: 1.05 }],
    },
    filledPinCodeContainer: {
        backgroundColor: '#4A4458',
    },
    footer: {
        marginBottom: 40,
    },
    resendButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 24,
    },
    resendText: {
        color: '#A78BFA',
        fontSize: 16,
    },
    resendLink: {
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    submitButton: {
        backgroundColor: '#A78BFA',
        paddingVertical: 15,
        borderRadius: 25,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    submitText: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
    },
});

export default OtpInputScreen;