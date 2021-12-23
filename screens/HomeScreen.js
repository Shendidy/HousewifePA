import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Header from '../components/home/Header'
import Stores from '../components/home/Stores'

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Header />
            <Stores />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1
    }
})

export default HomeScreen
