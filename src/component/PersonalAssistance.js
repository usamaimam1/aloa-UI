import React, { useState } from "react";
import { Text, CheckBox, View, StyleSheet, TouchableOpacity, ScrollView, Image } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CalendarStrip from 'react-native-calendar-strip';
import Colors from '../common/colors';
import { initialWindowMetrics } from "react-native-safe-area-context";
import moment from 'moment'
import fonts from "../common/fonts";
import { Actions } from "react-native-router-flux";
const callDatas = [
    {
        userName: 'Pater kingston',
        time: '10:50pm',
        text: ' What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the',
    },
    {
        userName: 'Aurelic Clark',
        time: '1:50Am',
        text: ' What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the',
    },
    {
        userName: 'Aurelic Clark',
        time: '1:50Am',
        text: ' What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the',
    }
]


var d = new Date();
var months = d.getMonth();
var years = d.getFullYear();
var currentMonth = months == 0 ? 'January' : months == 1 ? 'February' : months == 2 ? 'March' : months == 3 ? 'April' : months == 4 ? 'May' : months == 5 ? 'Jun' : months == 6 ? 'July' : months == 7 ? 'August' : months == 8 ? 'September' : months == 9 ? 'October' : months == 10 ? 'November' : 'December'

const PersonalAssistance = () => {

    const [callData, setcallData] = useState(callDatas);
    const [checkBox, setcheckBox] = useState(true);
    const [dates, setdates] = useState(new Date());
    const [month, setmonth] = useState(currentMonth);
    const [monthChange, setmonthChange] = useState(months);
    const [yearChange, setyearChange] = useState(years);

    // const customDatesStylesFunc = date => {
    //     const isSame = moment(dates).isSame(date, "day")
    //     console.log(isSame)
    //     return {
    //         dateContainerStyle: { paddingVertical: 5, backgroundColor: isSame ? '#6a5acd' : 'white', borderRadius: 7, borderColor: 'lightgrey', borderWidth: 0.5 },
    //     }
    // }
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 5 }}>
                <View style={{ flex: 1.5, backgroundColor: Colors.secondary, borderBottomEndRadius: 25, borderBottomStartRadius: 25 }}>
                    <View style={styles.headerView}>
                        <View style={[styles.headingView,]}>
                            <Text style={styles.headingText}>Personal Assistance</Text>

                        </View>
                        <View style={styles.toggleView}>
                            <View style={styles.toggleCard}>
                                <View style={{ flex: 3.1, }}>
                                    <View style={{ flex: 0.7 }}>
                                        <Text style={styles.toggleText}>Toggle call Forwarding</Text>
                                    </View>
                                    <View style={{ flex: 1 }}>
                                        <Text style={{ fontSize: 11, fontFamily: fonts.Medium }}>Enable of disable your personal assistance or when busy</Text>
                                    </View>
                                    <View style={{ flex: 1 }}>
                                        <TouchableOpacity
                                            // onPress={()>al}
                                            style={styles.toggleBtnView}>
                                            <Text style={{ color: '#fff', fontSize: 13, fontFamily: fonts.Bold }}>Toggle Setting</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={{ flex: 1.9, }}>
                                    <Image style={styles.image}
                                        source={require('../common/Smart-Watch.jpg')}
                                    />
                                </View>

                            </View>
                        </View>
                    </View>
                    <View style={[styles.calendarView]}>
                        <View style={[styles.monthArrowView,]}>
                            <View style={{ flex: 1 }}>
                                <TouchableOpacity onPress={() => { month == 'January' ? (setmonth('December'), setyearChange(yearChange - 1)) : month == 'December' ? setmonth('November') : month == 'November' ? setmonth('September') : month == 'September' ? setmonth('August') : month == 'August' ? setmonth('July') : month == 'July' ? setmonth('June') : month == 'June' ? setmonth('May') : month == 'May' ? setmonth('April') : month == 'April' ? setmonth('March') : month == 'March' ? setmonth('February') : month == 'February' ? setmonth('January') : setmonth('December') }}>
                                    <View style={styles.backIcon}>

                                        <Image style={{ height: 10, width: 15, }}
                                            source={require('../common/Back.png')}
                                        />
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                <TouchableOpacity onPress={() => { month == 'January' ? setmonth('February') : month == 'February' ? setmonth('March') : month == 'March' ? setmonth('April') : month == 'April' ? setmonth('May') : month == 'May' ? setmonth('June') : month == 'June' ? setmonth('July') : month == 'July' ? setmonth('August') : month == 'August' ? setmonth('September') : month == 'September' ? setmonth('October') : month == 'October' ? setmonth('November') : month == 'November' ? setmonth('December') : month == 'December' ? (setmonth('January'), setyearChange(yearChange + 1)) : null }}>
                                    <View style={styles.nextIcon}>

                                        <Image style={{ height: 10, width: 15, }}
                                            source={require('../common/Next.png')}
                                        />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <CalendarStrip
                            scrollable
                            style={{ height: 100, width: '100%', marginBottom: 0, borderWidth: 0 }}
                            calendarHeaderStyle={{ color: 'black', marginTop: -4, fontSize: 18, fontFamily: fonts.Medium }}
                            dateNameStyle={{ fontFamily: fonts.Medium, color: 'grey', borderBottomLeftRadius: 7, borderBottomRightRadius: 7, backgroundColor: '#fff', marginBottom: -38, width: 34, height: 20, paddingTop: 4, paddingHorizontal: 5, overflow: 'hidden' }}
                            dateNumberStyle={{ fontFamily: fonts.Bold, color: 'black', borderTopLeftRadius: 7, borderTopRightRadius: 7, backgroundColor: '#fff', paddingTop: 1, width: 34, height: 20, paddingHorizontal: 5, overflow: 'hidden' }}
                            iconContainer={{ flex: 0.1 }}
                            iconLeft={false}
                            iconRight={false}
                            headerText={`${month} ${yearChange}`}
                            highlightDateNameStyle={{ fontFamily: fonts.Medium, color: '#fff', borderBottomLeftRadius: 7, borderBottomRightRadius: 7, backgroundColor: '#6a5acd', marginBottom: -38, width: 34, height: 20, paddingTop: 4, paddingHorizontal: 5, overflow: 'hidden' }}
                            highlightDateNumberStyle={{ fontFamily: fonts.Bold, color: '#fff', borderTopLeftRadius: 7, borderTopRightRadius: 7, backgroundColor: '#6a5acd', paddingTop: 1, width: 34, height: 20, paddingHorizontal: 5, overflow: 'hidden' }}
                            selectedDate={dates}
                        // customDatesStyles={customDatesStylesFunc}
                        />
                    </View>

                </View>
                <ScrollView style={{ flex: 2.7 }}>
                    <View style={styles.callDetailsView}>
                        <View style={{ flex: 0.3, justifyContent: "center", marginVertical: "4%" }}>
                            <Text style={[styles.loggedCallText, {}]}> 3 Logged call</Text>
                        </View>

                        {
                            callData && callData.length ?
                                callData.map((key, index) => {
                                    return (

                                        <View key={index} style={styles.callDetailsCard}>
                                            <View style={styles.callDetailsCard2} >
                                                {/* <Text>Test</Text> */}

                                                <View style={styles.nameAndTimeView}>
                                                    <View style={styles.nameView}>
                                                        <View style={styles.profileIcon}>
                                                            <Image style={{ height: 13, width: 13, }} source={require('../common/Gprofile.png')} />
                                                        </View>
                                                        <Text style={styles.userName}>{key.userName}</Text>

                                                    </View>
                                                    <View style={{ flex: 0.8, flexDirection: 'row', alignItems: 'center' }}>
                                                        <View style={styles.timeIcon}>
                                                            <AntDesign name="clockcircleo" />
                                                            <Text style={{ fontSize: 12, marginLeft: 5, fontFamily: fonts.Medium }}>{key.time}</Text>
                                                        </View>
                                                        <TouchableOpacity activeOpacity={0.5}>
                                                            <View style={styles.callIconView}>
                                                                <Ionicons name="call" color="#fff" />
                                                            </View>
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>


                                                <View style={{ flex: 1, paddingHorizontal: 5 }}>
                                                    <Text style={{ fontSize: 14, color: 'grey', fontFamily: fonts.Medium }}>
                                                        {key.text}
                                                    </Text>
                                                </View>
                                                <View style={{ flex: 1, flexDirection: 'row', marginTop: 2 }}>
                                                    <View style={{ flex: 1.5, flexDirection: 'row', alignItems: 'center' }}>
                                                        <CheckBox
                                                            value={checkBox}
                                                            onValueChange={() => setcheckBox(!checkBox)}
                                                            // style={{ color: 'red' }}
                                                            tintColors={{ true: Colors.reverse, }}
                                                        />
                                                        <Text style={{ fontFamily: fonts.Medium, alignItems: 'center', fontSize: 12, }}>   Asked to be called back</Text>

                                                    </View>
                                                    <View style={{ flex: 0.6, flexDirection: 'row', alignItems: 'center' }}>
                                                        <TouchableOpacity activeOpacity={0.5}>
                                                            <TouchableOpacity onPress={() => { Actions.Stats() }} style={styles.detailsBtnView}>
                                                                <Text style={styles.detailsBtnText}>See Details</Text>
                                                                <AntDesign style={styles.detailsBtnText} name="right" />
                                                            </TouchableOpacity>
                                                        </TouchableOpacity>
                                                    </View>

                                                </View>
                                            </View>
                                        </View>
                                    )
                                })
                                : null
                        }
                    </View>
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    headerView: { flex: 1, backgroundColor: Colors.primary, borderBottomEndRadius: 30, borderBottomStartRadius: 30 },
    headingView: { flex: 1, alignItems: 'center', },
    headingText: { color: '#fff', fontSize: 18, marginTop: 10 + initialWindowMetrics.insets.top, fontFamily: fonts.Bold },
    toggleView: { flex: 0.5, alignItems: 'center', justifyContent: 'center', marginTop: initialWindowMetrics.insets.top },
    toggleCard: { flexDirection: 'row', overflow: 'hidden', borderRadius: 20, elevation: 1, padding: 20, height: 145, width: '90%', backgroundColor: '#fff', marginTop: 30 },
    toggleText: { fontFamily: fonts.Bold, color: '#6a5acd', fontSize: 14.5, },
    toggleBtnView: { borderRadius: 10, width: '60%', height: 40, backgroundColor: Colors.reverse, alignItems: 'center', justifyContent: 'center' },
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
    timeIcon: { flexDirection: 'row', height: 35, width: 80, alignItems: 'center', justifyContent: 'center', borderRadius: 10, backgroundColor: Colors.secondary, },
    callIconView: { height: 27, marginLeft: 5, width: 27, alignItems: 'center', justifyContent: 'center', borderRadius: 15, backgroundColor: '#40e0d0' },
    detailsBtnView: { flexDirection: 'row', height: 30, width: 80, alignItems: 'center', justifyContent: 'center', borderRadius: 10, backgroundColor: Colors.primary },
    detailsBtnText: { fontSize: 12, color: '#fff', fontSize: 11, fontFamily: fonts.Medium },

});


export default PersonalAssistance;
