import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Footer from '../shared/Footer'
import Header from '../shared/Header'

export default Settings = ({ navigation, route }) => (
        <View style={styles.container} >
            <View style={styles.contentContainer} >
                <Header navigation={navigation} screenToShow={'SettingsScreen'} />
                <ScrollView
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                style={{marginVertical: 5}}
                >
                    <View><Text style={{color: 'white'}}>Change account and app settings here...</Text></View>
                </ScrollView>
            </View>
            <Footer navigation={navigation} screenToShow={'SettingsScreen'} />
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