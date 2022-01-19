import React from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import Header from '../shared/Header'
import Footer from '../shared/Footer'

export default Carts = ({ navigation, route }) => (
        <View style={styles.container} >
            <Header navigation={navigation} screenToShow={'CartsScreen'} />

            <ScrollView
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                style={{marginVertical: 5}}
            >
                <Text style={{ color: 'white' }}>Carts</Text>
            </ScrollView>

            <Footer navigation={navigation} screenToShow={'CartsScreen'} />
        </View>
    )

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});