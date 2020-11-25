import colors from "../../common/colors";
import fonts from "../../common/fonts";

const { StyleSheet, Dimensions } = require("react-native");
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
    HeaderLogo: {
        height: 115 / 270 * 100,
        width: 2.5 * (115 / 270 * 100)
    },
    MainView: {
        flex: (HEIGHT - 270 - initialWindowMetrics.insets.top) / HEIGHT * 100,
        paddingTop: 30,
        paddingHorizontal: 15,
    },
    SettingRow: {
        height: 70,
        // flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 0
    },
    SettingTitle: {
        // flex: 1,
        fontSize: 14,
        fontFamily: fonts.Medium,
        color: colors.primary,
        paddingRight: 10
    },
    SettingsMessageView: {
        paddingVertical: 7,
        marginTop: 5,
        justifyContent: 'center',
        paddingHorizontal: 10,
        borderWidth: 0.5,
        borderColor: 'lightgrey',
        borderRadius: 5,
        // shadowColor: 'grey',
        // shadowOffset: { x: 0, y: 10 }
    },
    SettingsMessageText: {
        fontFamily: fonts.Light,
        fontSize: 15,
        paddingVertical: 5,
        color: 'grey'
    },
    LastSettingRow: {
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
    }
})
export default styles