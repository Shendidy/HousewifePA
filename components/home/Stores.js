import React, { useState } from 'react'
import { View, Text, ScrollView, StyleSheet, TextInput } from 'react-native'
import { STORES } from '../../data/stores'

const Stores = () => {

    const [stores, setStores] = useState(STORES);

    function filterStores(str){
        if(str) setStores(STORES.filter(store => store.name.toLowerCase().includes(str.toLowerCase())))
        else setStores(STORES);
    }

    return (
        <View style={styles.container}>
            <View style={styles.smallContainer}>
                <Text style={{color: 'black'}}>Add new store</Text>
            </View>
            <ScrollView
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.smallContainer}>
                    <TextInput
                        //style={styles.input}
                        onChangeText={(val) => filterStores(val)}
                        //value={number}
                        placeholder="Search your stores..."
                        //keyboardType="numeric"
                    />
                </View>
                {stores.sort((a, b) => a.name > b.name ? 1 : -1).map((store, index) => (
                    <View style={styles.storeContainer} key={store.id}>
                        <Text style={{color: 'black'}}>{store.name}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    storeContainer: {
        margin: 10,
        height: 100,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: 'blue',
        padding: 15,
        backgroundColor: 'rgba(255,255,255,1)'
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
    }
})

export default Stores