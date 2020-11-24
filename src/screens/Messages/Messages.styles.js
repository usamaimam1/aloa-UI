import colors from "../../common/colors";

const { StyleSheet } = require("react-native");
const { initialWindowMetrics } = require("react-native-safe-area-context");
const HEIGHT = 2436
const WIDTH = 1125
const styles = StyleSheet.create({
    Header: {
        flex: (270 + initialWindowMetrics.insets.top) / HEIGHT * 100,
        paddingTop: initialWindowMetrics.insets.top,
        backgroundColor: colors.primary,
        flexDirection: 'row',
        borderBottomLeftRadius: 60 / 270 * 100,
        borderBottomRightRadius: 60 / 270 * 100,
        paddingHorizontal: 25,
        paddingBottom: 15,
        alignItems: 'center'
    },
    MainView: {
        flex: (HEIGHT - 270 - initialWindowMetrics.insets.top) / HEIGHT * 100,
    }
})
export default styles