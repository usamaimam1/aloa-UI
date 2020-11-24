import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import fonts from '../../common/fonts'
import CustomFooter from '../../component/CustomFooter'

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
                <View style={{ flex: 8.7, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontFamily: fonts.Medium, fontSize: 14 }}>Stats</Text>
                </View>
                {/* Footer */}
                <View style={{ flex: 1.3, }}>
                    <CustomFooter />
                </View>
            </View>
        )
    }
}
export default Stats