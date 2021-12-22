import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Header from '../components/home/Header'

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Header />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightgrey',
        flex: 1
    }
})

export default HomeScreen
