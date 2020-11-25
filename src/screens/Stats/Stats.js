import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { initialWindowMetrics } from 'react-native-safe-area-context'
import colors from '../../common/colors'
import fonts from '../../common/fonts'
import CustomFooter from '../../component/CustomFooter'
import Feather from 'react-native-vector-icons/Feather'
class Stats extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {

    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                {/* body */}
                <View style={{ flex: 8.7, }}>
                    <View style={{ flex: 1, borderWidth: 0 }}>
                        <View style={{ flex: 1.5, backgroundColor: colors.secondary, borderBottomEndRadius: 25, borderBottomStartRadius: 25 }}>
                            <View style={styles.headerView}>
                                <View style={[styles.headingView,]}>
                                    <View style={{ flex: 1, justifyContent: 'center' }}>
                                        <Image source={require('../../assets/logo_without_text.png')} style={{ height: 40, width: 2.5 * 40 }} />
                                    </View>
                                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
                                        <Text style={styles.headingText}>Personal Assistance</Text>
                                    </View>

                                </View>
                                <View style={styles.toggleView}>
                                    <View style={styles.toggleCard}>
                                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                            <Text style={{ fontSize: 16, fontFamily: fonts.Medium, color: colors.primary }}>John Doe</Text>
                                        </View>
                                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                            <Text style={{ fontSize: 14, fontFamily: fonts.Medium, color: '#00D9B6' }}>+32 499 72 32 63</Text>
                                        </View>
                                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <TouchableOpacity style={{ flex: 1, borderWidth: 0, borderRadius: 7, flexDirection: 'row', alignItems: 'center', marginHorizontal: 5, paddingHorizontal: 7, backgroundColor: '#00D9B6', paddingVertical: 3 }}>
                                                <Feather name="phone" size={25} color="white" style={{ paddingRight: 15 }} />
                                                <Text style={{ fontSize: 12, fontFamily: fonts.Medium, color: 'white' }}>Call</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={{ flex: 1, borderWidth: 0, borderRadius: 7, flexDirection: 'row', alignItems: 'center', marginHorizontal: 5, paddingHorizontal: 7, backgroundColor: '#FF9702', paddingVertical: 3 }}>
                                                <Feather name="message-square" size={25} color="white" style={{ paddingRight: 15 }} />
                                                <Text style={{ fontSize: 12, fontFamily: fonts.Medium, color: 'white' }}>Text</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={{ flex: 1, borderWidth: 0, borderRadius: 7, flexDirection: 'row', alignItems: 'center', marginHorizontal: 5, paddingHorizontal: 7, backgroundColor: '#CCCCCC', paddingVertical: 3 }}>
                                                <Feather name="mail" size={25} color="white" style={{ paddingRight: 15 }} />
                                                <Text style={{ fontSize: 12, fontFamily: fonts.Medium, color: 'white' }}>Email</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 2, borderWidth: 0, paddingTop: 90, paddingHorizontal: 15 }}>
                        <View style={{ height: 50, flexDirection: "row", alignItems: 'center' }}>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
                                <Text style={{ fontSize: 14, fontFamily: fonts.Medium, color: colors.primary }}>Message</Text>
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
                                <Text style={{ fontSize: 14, fontFamily: fonts.Medium, color: colors.primary }}>Today 09:37</Text>
                            </View>
                        </View>
                        <View style={{ padding: 15, backgroundColor: '#DADADA' }}>
                            <Text style={{ fontFamily: fonts.Medium, fontSize: 12, paddingVertical: 3 }}>
                                Dear,
                            </Text>
                            <Text style={{ fontFamily: fonts.Medium, fontSize: 12, paddingVertical: 3 }}>
                                John would like to have a talk before the meeting of this afternoon.

                            </Text>
                            <Text style={{ fontFamily: fonts.Medium, fontSize: 12, paddingVertical: 3 }}>
                                Kind regards,
                            </Text>
                            <Text style={{ fontFamily: fonts.Medium, fontSize: 12, paddingVertical: 3 }}>
                                Your personal assistant, Chris
                            </Text>
                        </View>
                        <View style={{ height: 40, marginTop: 10, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10 }}>
                            <Feather name="info" size={25} color="#FF9702" style={{ paddingRight: 15 }} />
                            <Text style={{ fontSize: 12, fontFamily: fonts.Medium, color: '#FF9702' }}>John Requested to be called back</Text>
                        </View>
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
const styles = StyleSheet.create({
    headerView: { flex: 1, backgroundColor: colors.primary, borderBottomEndRadius: 30, borderBottomStartRadius: 30 },
    headingView: { flex: 1, flexDirection: 'row', alignItems: 'center', marginTop: initialWindowMetrics.insets.top, paddingHorizontal: 15 },
    headingText: { color: '#fff', fontSize: 15, fontFamily: fonts.Medium },
    toggleView: { flex: 0.5, alignItems: 'center', justifyContent: 'center', marginTop: initialWindowMetrics.insets.top, borderWidth: 0 },
    toggleCard: { zIndex: 4, overflow: 'hidden', borderRadius: 20, elevation: 1, padding: 10, height: 140, width: '90%', backgroundColor: '#fff', marginTop: 30, borderWidth: 0.3, borderColor: '#00D9B6', alignItems: 'center' },
    toggleText: { fontFamily: fonts.Bold, color: '#6a5acd', fontSize: 16, },
    toggleBtnView: { borderRadius: 10, width: '60%', height: 40, backgroundColor: colors.reverse, alignItems: 'center', justifyContent: 'center' },
    image: { height: 145, width: 128, marginTop: -20, },
    calendarView: { flex: 1, justifyContent: 'flex-end', marginTop: 2 + initialWindowMetrics.insets.top },
    monthArrowView: { flexDirection: 'row', paddingHorizontal: 28, marginBottom: -25, zIndex: 4 },
    backIcon: { height: 35, width: 35, alignItems: 'center', justifyContent: 'center', borderRadius: 17.5, borderWidth: 1, borderColor: 'lightgrey' },
    nextIcon: { height: 35, position: 'relative', width: 35, alignItems: 'center', justifyContent: 'center', borderRadius: 17.5, borderWidth: 1, borderColor: 'lightgrey' },
    callDetailsView: { flex: 2.3, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fffafa' },
    loggedCallText: { borderRadius: 25, fontSize: 14, borderColor: 'lightgrey', color: 'grey', fontFamily: fonts.Medium, borderWidth: 1, width: 130, textAlign: 'center', padding: 8 },
    callDetailsCard: { width: '100%', alignItems: 'center', flex: 2, },
    callDetailsCard2: { padding: 15, borderRadius: 10, width: '90%', marginBottom: "2%", backgroundColor: "#FFFAFA", elevation: 8, },
    nameAndTimeView: { flex: 1, flexDirection: 'row', justifyContent: 'center', marginBottom: 2 },
    nameView: { flex: 1.3, flexDirection: 'row', alignItems: 'center' },
    profileIcon: { height: 27, width: 27, alignItems: 'center', justifyContent: 'center', borderRadius: 15, borderWidth: 1, borderColor: 'lightgrey' },
    userName: { fontFamily: fonts.Bold, alignItems: 'center', marginLeft: 10, fontSize: 16 },
    timeIcon: { flexDirection: 'row', height: 35, width: 80, alignItems: 'center', justifyContent: 'center', borderRadius: 10, backgroundColor: colors.secondary, },
    callIconView: { height: 27, marginLeft: 5, width: 27, alignItems: 'center', justifyContent: 'center', borderRadius: 15, backgroundColor: '#40e0d0' },
    detailsBtnView: { flexDirection: 'row', height: 30, width: 80, alignItems: 'center', justifyContent: 'center', borderRadius: 10, backgroundColor: colors.primary },
    detailsBtnText: { fontSize: 12, color: '#fff', fontSize: 11, fontFamily: fonts.Medium },

});
export default Stats