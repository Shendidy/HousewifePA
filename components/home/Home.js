import React from 'react'
import { View, Text } from 'react-native'
import Header from '../shared/Header'

export default Home = ({ navigation, route }) => (
        <View>
            <Header navigation={navigation} screenToShow={'HomeScreen'} />
            <Text style={{color: 'white'}}>Welcome to your Housewife Personal Assistant!</Text>
        </View>
    )
