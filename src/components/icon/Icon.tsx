import React from "react";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";

type IconProps = {
    name: string;
    size?: number;
    color?: string;
};

const Icon: React.FC<IconProps> = ({ name, size = 24, color = "black" }) => {
    return <FontAwesome6 name={name} size={size} color={color} />;
};

export default Icon;
