import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Header from '../components/home/Header'
import Stores from '../components/home/Stores'
import Items from '../components/home/Carts'
import Recepies from '../components/home/Recepies'

const HomeScreen = () => {
    const [screen, setScreen ] = useState(<Stores />);

    return (
        <View style={styles.container}>
            <Header screen={screen} onScreenChange={setScreen} />
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
