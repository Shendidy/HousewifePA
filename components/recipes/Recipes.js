import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Header from '../shared/Header'
import Footer from '../shared/Footer'

export default Recipes = ({ navigation, route}) => (
    <View style={styles.container} >
        <Header navigation={navigation} screenToShow={'RecipesScreen'} />

        <ScrollView
            horizontal={false}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            style={{marginVertical: 5}}
        >
            <Text style={{ color: 'white' }}>Recipes</Text>
        </ScrollView>

        <Footer navigation={navigation} screenToShow={'RecipesScreen'} />
    </View>
)

const styles = StyleSheet.create({
container: {
    flex: 1,
},
});