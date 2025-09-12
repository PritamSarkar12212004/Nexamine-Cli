import { PieChart } from "react-native-gifted-charts";
import GrediantColor from "../../constants/colors/GrediantColor";
import { Text, View } from "react-native";

const PaiChartUi = () => {
    const pieData = [
        { value: 30, color: '#177AD5' },
        { value: 70, color: '#ED6665' }
    ];
    return (
        <View className="flex gap-5">
            <PieChart
                data={pieData}
                radius={130}
                donut
                showText
                showValuesAsLabels
                showTextBackground
                textBackgroundColor="#333"
                textBackgroundRadius={22}
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
}
export default PaiChartUi