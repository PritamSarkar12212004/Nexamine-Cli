import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Circle, Line, Defs, LinearGradient, Stop, G, Text as SvgText } from 'react-native-svg';
import Animated, {
    useSharedValue,
    useAnimatedProps,
    withTiming,
} from 'react-native-reanimated';

const AnimatedLine = Animated.createAnimatedComponent(Line);

interface Props {
    speed: number;       // current speed in MB/s
    maxSpeed: number;    // max speed, e.g., 4 MB/s
    label: string;       // "Upload" or "Download"
    size?: number;       // diameter of the speedometer
}

const ModernSpeedometer: React.FC<Props> = ({ speed, maxSpeed, label, size = 150 }) => {
    const needleAngle = useSharedValue(0);

    useEffect(() => {
        const angle = (speed / maxSpeed) * 180; // semicircle from 0 to 180 degrees
        needleAngle.value = withTiming(angle, { duration: 500 });
    }, [speed]);

    const animatedProps = useAnimatedProps(() => {
        const radians = (Math.PI * (needleAngle.value - 90)) / 180;
        const cx = size / 2;
        const cy = size / 2;
        const r = size * 0.4; // needle length
        return {
            x2: cx + r * Math.cos(radians),
            y2: cy + r * Math.sin(radians),
        };
    });

    const cx = size / 2;
    const cy = size / 2;
    const radius = size * 0.45;

    return (
        <View style={{ alignItems: 'center', marginVertical: 10 }}>
            <Svg width={size} height={size / 2}>
                <Defs>
                    <LinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <Stop offset="0%" stopColor="#00FF00" />
                        <Stop offset="50%" stopColor="#FFFF00" />
                        <Stop offset="100%" stopColor="#ED6665" />
                    </LinearGradient>
                </Defs>

                {/* semicircle background arc */}
                <Circle
                    cx={cx}
                    cy={cy}
                    r={radius}
                    stroke="url(#grad)"
                    strokeWidth={10}
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={`${Math.PI * radius}`}
                    strokeDashoffset={Math.PI * radius / 2}
                    rotation="-90"
                    originX={cx}
                    originY={cy}
                />

                {/* needle */}
                <AnimatedLine
                    x1={cx}
                    y1={cy}
                    animatedProps={animatedProps}
                    stroke="#ED6665"
                    strokeWidth={4}
                />

                {/* center dot */}
                <Circle cx={cx} cy={cy} r={5} fill="#ED6665" />

                {/* optional labels */}
                <SvgText
                    x={cx}
                    y={cy + radius * 0.6}
                    fill="white"
                    fontSize={16}
                    fontWeight="bold"
                    textAnchor="middle"
                >
                    {speed.toFixed(2)} MB/s
                </SvgText>
            </Svg>

            <Text style={styles.label}>{label}</Text>
            <Text style={styles.max}>Max {maxSpeed} MB/s</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    label: { color: 'white', fontSize: 16, fontWeight: 'bold', marginTop: 20 },
    max: { color: '#999', fontSize: 12 },
});

export default ModernSpeedometer;
