import React from 'react'
import { View, Text, StyleSheet, Image, Switch, TextInput } from 'react-native'
import colors from '../../common/colors'
import fonts from '../../common/fonts'
import CustomFooter from '../../component/CustomFooter'
import styles from './Settings.styles'
class Settings extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            enablePersonalGreetings: false,
            sendEmail: false,

            message: null,
        }
    }
    componentDidMount() {

    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                {/* body */}
                <View style={{ flex: 8.7, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={styles.Header}>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
                            <Image source={require('../../assets/logo_without_text.png')} style={styles.HeaderLogo} />
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
                            <Text style={{ fontFamily: fonts.Medium, fontSize: 13, color: 'white' }}>Settings</Text>
                        </View>
                    </View>
                    <View style={styles.MainView}>
                        <View style={styles.SettingRow}>
                            <View style={{ width: "85%" }}>
                                <Text style={styles.SettingTitle}>Custom Personal Greeting</Text>
                            </View>
                            <Switch style={{ color: colors.primary }} value={this.state.enablePersonalGreetings} onValueChange={val => this.setState({ enablePersonalGreetings: val })} />
                        </View>
                        <View style={styles.SettingsMessageView}>
                            <TextInput
                                placeholder="Welcome at Aloa, how can we help you?"
                                placeholderTextColor="grey"
                                value={this.state.message}
                                onValueChange={val => this.setState({ message: val })}
                                style={styles.SettingsMessageText}
                            />
                            {/* <Text style={styles.SettingsMessageText}>

                            </Text>
                            <Text style={styles.SettingsMessageText}>
                               
                            </Text> */}
                        </View>
                        <View style={styles.LastSettingRow}>
                            <View style={{ width: "85%" }}>
                                <Text style={[styles.SettingTitle, { color: colors.primary }]}>Automatically send me an emailwhen I have a missed call</Text>
                            </View>
                            <Switch style={{ color: colors.primary }} value={this.state.sendEmail} onValueChange={val => this.setState({ sendEmail: val })} />
                        </View>
                    </View>
                </View>
                {/* Footer */}
                <View style={{ flex: 1, }}>
                    <CustomFooter />
                </View>
            </View>
        )
    }
}
export default Settings