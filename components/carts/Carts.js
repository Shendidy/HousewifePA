import React from 'react'
import { View, Text } from 'react-native'
import Header from '../shared/Header'

export default Carts = ({ navigation, route }) => (
        <View>
            <Header navigation={navigation} screenToShow={'CartsScreen'} />
            <Text style={{ color: 'white' }}>Carts</Text>
        </View>
    )
