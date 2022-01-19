import React, { useState } from 'react'
import { View, Text, ScrollView, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native'
import { STORES } from '../../data/stores'
import StoreCard from './StoreCard'
import Header from '../shared/Header'
import Footer from '../shared/Footer'

const Stores = ({ navigation, route }) => {

    const [stores, setStores] = useState(STORES);

    function filterStores(str){
        if(str) setStores(STORES.filter(store => store.name.toLowerCase().includes(str.toLowerCase())))
        else setStores(STORES);
    }

    return (
        <View style={styles.container} >
            <View style={styles.contentContainer}>
                <Header navigation={navigation} screenToShow={'StoresScreen'} />
                
                <TouchableOpacity
                    onPress={() => navigation.push('AddStoreScreen')}
                >
                    <View style={styles.smallContainer}>
                        <Text style={{color: 'black', fontSize: 20, height: 30, marginTop: -5}}>Add New Store</Text>
                    </View>
                </TouchableOpacity>
                
                <ScrollView
                    horizontal={false}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    style={{marginVertical: 5}}
                >
                    <View style={styles.smallContainer}>
                        <View style={styles.searchContainer}>
                            <Image 
                                style={styles.searchLogo} 
                                source={require('../../assets/images/search_icon.png')} 
                            />
                            <TextInput
                                style={styles.input}
                                onChangeText={(val) => filterStores(val)}
                                placeholder="Search your stores..."
                            />
                        </View>
                    </View>

                    {stores.sort((a, b) => a.name > b.name ? 1 : -1).map((store, index) => (
                        <View key={store.name} >
                            <StoreCard store={store} navigation={navigation} route={route} />
                        </View>
                    ))}
                </ScrollView>
                
                <Footer navigation={navigation} screenToShow={'StoresScreen'} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1 // pushes the footer to the end of the screen
    },
    titleWrapper: {

    },
    inputWrapper: {

    },
    searchContainer: {
        flexDirection: "row",
        alignItems: 'center'
    },
    container: {
        flex: 1
    },
    searchLogo: {
        width: 20,
        height: 20,
        marginRight: 5
    },
    smallContainer: {
        margin: 10,
        height: 50,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: 'red',
        padding: 15,
        backgroundColor: 'rgba(255,255,255,1)',
        alignItems: 'center'
    },
    input: {
        width: '95%',
        height: 25,
        marginTop: -4,
    },
    footer: {
        //height: 100
    },
})

export default Stores
