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
        paddingTop: 20,
        paddingHorizontal: 15,
    },
    SectionTitle: {
        fontFamily: fonts.Medium,
        fontSize: 14,
        paddingVertical: 5
    },
    LogSection: {
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 0
    },
    LogSectionItem: {
        height: 390 / HEIGHT * Dimensions.get("window").height,
        width: 490 / WIDTH * Dimensions.get("window").width,
        borderWidth: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderColor: 'grey'
    },
    TitleView: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 5,
    },
    LogItemTitle: {
        fontSize: 18,
        fontFamily: fonts.Bold,
    },
    DescriptionView: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 5,
    },
    LogItemDescription: {
        fontSize: 14,
        fontFamily: fonts.Medium,
        color: 'grey'
    },
    graphStyle: {
        marginTop: 10,
        // borderRadius: 10
    },
    ChartView: {
        height: 300,
        width: Dimensions.get("window").width - 30
    }
})
export default styles