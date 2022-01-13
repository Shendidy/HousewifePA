import React, { useState, useCallback } from 'react'
import { View, Text, StyleSheet, Image, Linking, TouchableOpacity, ScrollView, Modal, Pressable, useWindowDimensions } from 'react-native'
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component'
import StoreItems from '../home/StoreItems';
import ItemDetailsView from './ItemDetailsView';

const ItemCard = ({ storeName, item, onScreenChange }) => {
    const[modalVisible, setModalVisible] = useState(false);
    
    var price, itemUrl;

    price = item.prices.filter(i => i.store === storeName)[0].data[0].price;
    itemUrl = item.prices.filter(i => i.store === storeName)[0].data[0].link;

    console.log('\nItem prices:')
    console.log(price);
    console.log(itemUrl);
    console.log('Store name: ' + storeName)

    return (
        <View style={styles.centeredView}>
            <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <ScrollView
                            horizontal={false}
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                        >
                            <ItemDetailsView item={item} storeName={storeName} price={price} itemUrl={itemUrl} onScreenChange={onScreenChange} setModalVisible={setModalVisible} />
                        </ScrollView>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Close</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <TouchableOpacity 
                style={[styles.itemContainer]}
                onPress={() => setModalVisible(true)}
            >
                <View style={styles.mainCard}>
                    <Image
                        source={item.image}
                        style={styles.image}
                    />
                    <View style={styles.details}>
                        <Text style={styles.detailsText}>{item.name}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    //**************
    //Modal styling
    //**************
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    modalView: {
        height: '85%',
        width: '95%',
        margin: 20,
        backgroundColor: 'rgba(255,255,255,0.98)',
        borderRadius: 20,
        padding: 15,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        marginTop: 20,
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        borderWidth: 2,
        borderColor: 'black',
    },
    buttonClose: {
        backgroundColor: "red",
    },
    textStyle: {
        paddingHorizontal: 25,
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "left"
    },
    modalDetailsContainer: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 5,
        alignSelf: 'flex-start',
        alignItems: 'flex-start'
    },
    modalDetailsLabel: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    modalDetailsText: {
        fontSize: 22,
        flexWrap: 'wrap',
    },
    //**************
    //Table styling
    //**************
    tableContainer: {
        flex: 1,
    },
    tableHeader: { 
        height: 40,
        backgroundColor: 'rgba(255,0,0,0.35)',
    },
    tableText: { 
        textAlign: 'center', 
        fontWeight: '500',
        margin: 6,
        fontSize: 18,
    },
    dataWrapper: { 
        marginTop: -1 
    },
    row: { 
        height: 40, 
        backgroundColor: '#F7F8FA' 
    },
    //**************
    //Main styling
    //**************
    itemContainer: {
        margin: 10,
        height: 100,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: 'blue',
        padding: 15,
        paddingLeft: 5,
        backgroundColor: 'rgba(255,255,255,1)',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    mainCard: {
        height: '100%',
        flexDirection: 'row',
        flex: 15,
        padding: 2,
    },
    image: {
        width: 100,
        height: '100%',
        marginRight: 5,
        resizeMode: 'contain',
        flex: 2,
    },
    detailsImage: {
        width: 150,
        height: 150,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 25,
        marginBottom: 15,
    },
    details: {
        flex: 4,
        display: 'flex',
    },
    detailsText: {
        color: 'black',
        fontSize: 18,
        flex: 2,
        textAlignVertical: 'center',
    },
    itemLink: {
        height: 25,
        textDecorationLine: 'underline',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    itemLinkText: {
        height: '100%',
        width: '100%',
        textAlign: 'center',
        color: 'blue',
    },
})

export default ItemCard