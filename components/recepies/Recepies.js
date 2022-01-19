import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Header from '../shared/Header'
import Footer from '../shared/Footer'

export default Recepies = ({ navigation, route}) => (
    <View style={styles.container} >
        <Header navigation={navigation} screenToShow={'RecepiesScreen'} />

        <ScrollView
            horizontal={false}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            style={{marginVertical: 5}}
        >
            <Text style={{ color: 'white' }}>Recepies</Text>
        </ScrollView>

        <Footer navigation={navigation} screenToShow={'RecepiesScreen'} />
    </View>
)

const styles = StyleSheet.create({
container: {
    flex: 1,
},
});