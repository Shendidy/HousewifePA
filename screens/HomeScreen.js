import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import Header from '../components/home/Header'
import Home from '../components/home/Home'

const HomeScreen = () => {
    const [screen, setScreen ] = useState(<Home />);

    return (
        <View style={styles.container}>
            <Header onScreenChange={setScreen} />
            {screen}
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
