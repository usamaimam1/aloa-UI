import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import fonts from '../../common/fonts'
import CustomFooter from '../../component/CustomFooter'
import styles from './Messages.styles'
class Messages extends React.Component {
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
                    <View style={styles.Header}>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
                            <Image source={require('../../assets/logo.png')} style={{ height: 50, width: '100%' }} resizeMode="contain" />
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
                            <Text style={{ fontFamily: fonts.Medium, fontSize: 13, color: 'white' }}>Settings</Text>
                        </View>
                    </View>
                    <View style={styles.MainView}>

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