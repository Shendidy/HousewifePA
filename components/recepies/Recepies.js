import React from 'react'
import { View, Text } from 'react-native'
import Header from '../shared/Header'

export default Recepies = ({ navigation, route}) => (
        <View>
            <Header navigation={navigation} screenToShow={'RecepiesScreen'} />
            <Text style={{color: 'white'}}>Recepies</Text>
        </View>
    )
