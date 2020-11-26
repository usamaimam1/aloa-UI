import React from 'react'
import { View, Text, StyleSheet, Image, Dimensions, processColor } from 'react-native'
import { BarChart } from 'react-native-charts-wrapper'
import { ScrollView } from 'react-native-gesture-handler'
import { clockRunning } from 'react-native-reanimated'
import colors from '../../common/colors'
import fonts from '../../common/fonts'
import CustomFooter from '../../component/CustomFooter'
import styles from './Messages.styles'

class Messages extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            legend: {
                enabled: true,
                textSize: 14,
                form: 'SQUARE',
                formSize: 14,
                xEntrySpace: 10,
                yEntrySpace: 5,
                formToTextSpace: 5,
                wordWrapEnabled: true,
                maxSizePercent: 0.5
            },
            data: {
                dataSets: [{
                    values: [{ y: 112 }, { y: 120 }, { y: 102 }, { y: 110 }, { y: 114 },],
                    label: 'Bar dataSet',
                    config: {
                        color: processColor('teal'),
                        barShadowColor: processColor('lightgrey'),
                        highlightAlpha: 90,
                        highlightColor: processColor('red'),
                    }
                }],

                config: {
                    barWidth: 0.7,
                }
            },
            highlights: [{ x: 3 }, { x: 6 }],
            xAxis: {
                valueFormatter: ['12am - 6am', '6am - 10am', '10am - 2pm', '2pm - 6pm', '6pm - 12am',],
                granularityEnabled: true,
                granularity: 1,
            }
        }
    }
    componentDidMount() {

    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                {/* body */}
                <View style={{ flex: 8.7, }}>
                    <View style={styles.Header}>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
                            <Image source={require('../../assets/logo_without_text.png')} style={styles.HeaderLogo} />
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
                            <Text style={{ fontFamily: fonts.Medium, fontSize: 13, color: 'white' }}>Statistics</Text>
                        </View>
                    </View>
                    <View style={styles.MainView}>
                        <ScrollView>
                            <Text style={styles.SectionTitle}>Your Logged Calls</Text>
                            <View style={styles.LogSection}>
                                <View style={[styles.LogSectionItem, { marginRight: 7 }]}>
                                    <View style={styles.TitleView}>
                                        <Text style={styles.LogItemTitle}>30</Text>
                                    </View>
                                    <View style={styles.DescriptionView}>
                                        <Text style={styles.LogItemDescription}>Calls Today</Text>
                                    </View>
                                </View>
                                <View style={[styles.LogSectionItem, { marginLeft: 7 }]}>
                                    <View style={styles.TitleView}>
                                        <Text style={styles.LogItemTitle}>420</Text>
                                    </View>
                                    <View style={styles.DescriptionView}>
                                        <Text style={styles.LogItemDescription}>Calls This Month</Text>
                                    </View>
                                </View>
                            </View>
                            <Text style={[styles.SectionTitle, { marginTop: 12 }]}>General</Text>
                            <View>
                                <Text style={{ fontSize: 15, fontFamily: fonts.Medium, alignSelf: 'center', color: colors.primary, marginVertical: 7 }}>Frequent Call Times</Text>
                                <View>

                                    <BarChart
                                        style={{ height: 400 }}
                                        data={this.state.data}
                                        xAxis={this.state.xAxis}
                                        animation={{ durationX: 2000 }}
                                        legend={this.state.legend}
                                        gridBackgroundColor={processColor('#ffffff')}
                                        visibleRange={{ x: { min: 5, max: 5 } }}
                                        drawBarShadow={false}
                                        drawValueAboveBar={true}
                                        drawHighlightArrow={true}
                                        // onSelect={this.handleSelect.bind(this)}
                                        highlights={this.state.highlights}
                                        onChange={(event) => console.log(event.nativeEvent)}
                                    />
                                </View>
                                {/* <BarChart
                                    data={this.state.exampleData}
                                    width={Dimensions.get("window").width - 30} // from react-native
                                    height={300}
                                    withCustomBarColorFromData={true}
                                    flatColor={true}
                                    chartConfig={{
                                        width: 50,
                                        data: this.state.exampleData.datasets[0].data,
                                        backgroundColor: 'white',
                                        backgroundGradientFrom: 'white',
                                        backgroundGradientTo: 'white',
                                        decimalPlaces: 2, // optional, defaults to 2dp
                                        color: (opacity = 1, index) => 'pink',
                                        // color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                        labelColor: () => '#000',
                                        propsForLabels: { fontFamily: fonts.Medium, fontSize: 12, overflow: 'hidden' },
                                        style: {
                                            borderRadius: 16
                                        },
                                        propsForDots: {
                                            r: "6",
                                            strokeWidth: "2",
                                            stroke: "#ffa726"
                                        }
                                    }}
                                    bezier
                                    style={styles.graphStyle}
                                /> */}
                            </View>
                        </ScrollView>
                    </View>
                </View>
                {/* Footer */}
                <View style={{ flex: 1.3, }}>
                    <CustomFooter />
                </View>
            </View>
        )
    }
}
export default Messages