import { PieChart } from "react-native-gifted-charts";
import GrediantColor from "../../constants/colors/GrediantColor";
import { View } from "react-native";

const PaiChartUi = ({ valuData, size }: any) => {
    const defaultData = [
        { value: 30, color: '#177AD5' },
        { value: 70, color: '#ED6665' }
    ];

    return (
        <View className="flex gap-5">
            <PieChart
                data={valuData && valuData.length ? valuData : defaultData}
                radius={size ? size : 130}
                donut
                showText
                showValuesAsLabels
                showTextBackground
                textBackgroundColor="#333"
                textBackgroundRadius={0}
                textColor="white"
                textSize={16}
                fontWeight="bold"
                strokeWidth={10}
                strokeColor={GrediantColor.firstColor}
                innerCircleBorderWidth={10}
                innerCircleBorderColor="#333"
            />
        </View>
    );
};

export default PaiChartUi;
