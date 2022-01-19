import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Footer from '../shared/Footer'
import Header from '../shared/Header'

export default Home = ({ navigation, route }) => (
        <View style={styles.container} >
            <View style={styles.contentContainer} >
                <Header navigation={navigation} screenToShow={'HomeScreen'} />
                <ScrollView
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                style={{marginVertical: 5}}
                >
                    <View><Text style={{color: 'white'}}>Welcome to your Housewife Personal Assistant!Welcome to your Housewife Personal Assistant!Welcome to your Housewife Personal Assistant!Welcome to your Housewife Personal Assistant!</Text></View>
                    <View><Text style={{color: 'white'}}>Welcome to your Housewife Personal Assistant!Welcome to your Housewife Personal Assistant!Welcome to your Housewife Personal Assistant!Welcome to your Housewife Personal Assistant!</Text></View>
                    <View><Text style={{color: 'white'}}>Welcome to your Housewife Personal Assistant!Welcome to your Housewife Personal Assistant!Welcome to your Housewife Personal Assistant!Welcome to your Housewife Personal Assistant!</Text></View>
                    <View><Text style={{color: 'white'}}>Welcome to your Housewife Personal Assistant!Welcome to your Housewife Personal Assistant!Welcome to your Housewife Personal Assistant!Welcome to your Housewife Personal Assistant!</Text></View>
                    <Text></Text>
                    <View><Text style={{color: 'white'}}>Welcome to your Housewife Personal Assistant!Welcome to your Housewife Personal Assistant!Welcome to your Housewife Personal Assistant!Welcome to your Housewife Personal Assistant!</Text></View>
                    <View><Text style={{color: 'white'}}>Welcome to your Housewife Personal Assistant!Welcome to your Housewife Personal Assistant!Welcome to your Housewife Personal Assistant!Welcome to your Housewife Personal Assistant!</Text></View>
                </ScrollView>
            </View>
            <Footer navigation={navigation} screenToShow={'HomeScreen'} />
        </View>
    )

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        flex: 1 // pushes the footer to the end of the screen
    }
});