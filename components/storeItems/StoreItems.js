import React, { useState, useCallback } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native'
import Header from '../shared/Header';
import { ITEMS } from '../../data/items'
import ItemCard from './ItemCard';

const StoreItems = ({ navigation, route }) => {
    let newItemsList;
    newItemsList = [];

    ITEMS.filter(item => item.prices.map(storePrice => {
        if(storePrice.store === route.params.currentStore.name) newItemsList.push(item)
      }));

    const [items, setItems] = useState(newItemsList);

    function filterItems(str = route.params.fileterString){
        if(str) setItems(newItemsList.filter(item => item.name.toLowerCase().includes(str.toLowerCase())));
        else setItems(newItemsList);
    }

    return (
        <View style={styles.container}>
            <Header navigation={navigation} screenToShow={'StoreItemsScreen'} />
            <View style={styles.headerContainer}>
                <TouchableOpacity
                    style={[styles.logoContainer, {width:100}]}
                    onPress={() => navigation.goBack()}
                >
                    <Image
                            source={require('../../assets/images/back_icon.png')}
                            style={styles.backIcon}
                    />
                </TouchableOpacity>
                <View style={styles.logoContainer}>
                    <Image
                            source={route.params.currentStore.logo}
                            style={styles.logo}
                    />
                </View>
                <Text style={styles.header}>{route.params.currentStore.name}</Text>
            </View>
            <TouchableOpacity
                onPress={() => navigation.push('AddItemScreen', {store: route.params.currentStore })}
            >
                <View style={styles.smallContainer}>
                    <Text style={{color: 'black', fontSize: 20, height: 30, marginTop: -5}}>Add New Item</Text>
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
                            onChangeText={(val) => filterItems(val)}
                            placeholder="Search your stores..."
                        />
                    </View>
                </View>

                {items.sort((a, b) => a.name > b.name ? 1 : -1).map((item, index) => (
                    <View key={item.name} >
                        <ItemCard navigation={navigation} storeName={route.params.currentStore.name} item={item} />
                    </View>
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
        flex: 1,
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
    searchLogo: {
        width: 20,
        height: 20,
        marginRight: 5
    },
    headerContainer: {
        flexDirection: 'row',
        marginBottom: 5,
        marginTop: 15,
    },
    logoContainer: {
        width: 50,
        flexDirection: 'row',
        alignContent: 'flex-end',
    },
    logo: {
        height: '100%',
        resizeMode: 'contain',
        flex: 1,
    },
    header: {
        fontWeight: '900',
        color: 'white',
        fontSize: 25,
        textAlign: 'left',
        flex: 1,
    },
    backIcon: {
        flex: 1,
        height: '100%',
        resizeMode: 'contain',
    },
    input: {
        width: '95%',
        height: 25,
        marginTop: -4,
    },
})

export default StoreItems
