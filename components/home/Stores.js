import React, { useState, useCallback } from 'react'
import { View, Text, ScrollView, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native'
import { STORES } from '../../data/stores'
import Card from '../shared/StoreCard'
import AddStore from './AddStore'

const Stores = ({ onScreenChange }) => {

    const [stores, setStores] = useState(STORES);

    function filterStores(str){
        if(str) setStores(STORES.filter(store => store.name.toLowerCase().includes(str.toLowerCase())))
        else setStores(STORES);
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={useCallback(event => {
                    onScreenChange(<AddStore />)
                  }, [onScreenChange])}
            >
                <View style={styles.smallContainer}>
                    <Text style={{color: 'black', fontSize: 20, height: 20}}>Add new store</Text>
                </View>
            </TouchableOpacity>
            <ScrollView
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
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
                    <TouchableOpacity key={store.name}>
                        <Card store={store} />
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
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
        //marginLeft: 5,
        height: 25,
        //borderColor: 'black',
        //borderWidth: 1,
        marginTop: -4,
    }
})

export default Stores
