import React, { useState, useCallback } from 'react'
import { Text, View, StyleSheet, useWindowDimensions, Linking } from 'react-native'
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component'
import StoreItems from '../home/StoreItems'
import { STORES } from '../../data/stores'

const AllAvailablePrices = (prices) => {
    let onScreenChange = prices.onScreenChange;
    const tableHeader = ['Store','Price'];
    const storeName = prices.storeName;
    let { height, width } = useWindowDimensions();
    const otherPrices = GetOtherPricesRows(prices, storeName, onScreenChange, prices.setModalVisible);
    var widthArray = [150, 75];
    width = width * 0.9;
    if(width > 225) widthArray = [width*0.6, width*0.3];
    
    return(
        <View style={[styles.tableContainer]}>
            <Table borderStyle={{borderWidth: 1}}>
                <Row data={tableHeader} widthArr={widthArray} style={styles.tableHeader} textStyle={[styles.tableText, {fontSize: 22, fontWeight: 'bold'}]} />
                <Rows data={otherPrices} widthArr={widthArray} textStyle={styles.tableText} />
            </Table>
        </View>
    );
};

const GetOtherPricesRows = (prices, storeName, onScreenChange, setModalVisible) => {
    var storeToDisplay;
    var allPricesArray = [];
    var currentStoreName;
    const itemName = prices.itemName;

    for (const [store, details] of Object.entries(prices)) {
        for (const [data, info] of Object.entries(details)) {
            for (const [key, value] of Object.entries(info)) {
                if(key === 'store') {
                    currentStoreName = value;
                }
                if(key === 'data') {
                    for( const [key1, value1] of Object.entries(value)) {
                        if(storeName !== currentStoreName) {
                            const storeToSend = STORES.filter(store => store.name === currentStoreName)[0];
                            storeToDisplay = <Text 
                                                style={[styles.tableText, {color: 'blue', textDecorationLine: 'underline'}]}
                                                // onPress={useCallback(event => {
                                                //     setModalVisible(false);
                                                //     onScreenChange(<StoreItems store={storeToSend} onScreenChange={onScreenChange} filterString={itemName} />);
                                                // }, [onScreenChange])}
                                            >
                                                {currentStoreName}
                                            </Text>;
                            allPricesArray.push([storeToDisplay, "£"+value1.price.toFixed(2)]);
                        }
                    }
                }
            }
        }
    }

    // sort the array by assending prices
    allPricesArray.sort(function(a, b) {
        var vala, valb;

        vala = a[1];
        valb = b[1];
        if(vala < valb) {
            return -1;
        }
        else if (vala > valb) {
            return 1;
        }
        return 0;
    })

    return allPricesArray;
};

const styles = StyleSheet.create({
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
});

export default AllAvailablePrices
