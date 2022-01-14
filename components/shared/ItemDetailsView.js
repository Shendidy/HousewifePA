import React from 'react'
import { View, Text, StyleSheet, Image, Linking } from 'react-native'
import AllAvailablePrices from './AllAvailablePrices';

const ItemDetailsView = ({item, storeName, price, itemUrl, onScreenChange, setModalVisible}) => {
    let linkTag;
    if(itemUrl != null) {
        linkTag = 
            <Text style={styles.modalDetailsContainer}>
                    <Text style={[styles.itemLinkText, {fontSize: 22, textDecorationLine:'underline'}]}
                        onPress={() => Linking.openURL(itemUrl)}>
                        Check it out online
                    </Text>
            </Text>
    }

    let otherPricesTag;
    if(item.prices.length === 1) {
        otherPricesTag = <Text style={[styles.modalDetailsLabel, {width: '100%', paddingTop: 5}]}>No Other Suppliers Available. </Text>
    }
    else if(item.prices.length > 1) {
        otherPricesTag =
            <>
                <Text style={[styles.modalDetailsLabel, {width: '100%', paddingTop: 5}]}>All Available Prices: </Text>
                    <Text style={styles.modalDetailsContainer}>
                    <Text style={styles.modalDetailsText}><AllAvailablePrices prices={item.prices} storeName={storeName} onScreenChange={onScreenChange} setModalVisible={setModalVisible} /></Text>
                </Text>
            </>
    }

    return (
        <View style={styles.centeredView}>
            <Image
                source={item.image}
                style={styles.detailsImage}
            />
            <Text style={styles.modalDetailsContainer}>
                <Text style={styles.modalDetailsLabel}>Store: </Text>
                <Text style={styles.modalDetailsText}>{storeName}</Text>
            </Text>
            <Text style={styles.modalDetailsContainer}>
                <Text style={styles.modalDetailsLabel}>Brand: </Text>
                <Text style={styles.modalDetailsText}>{item.brand}</Text>
            </Text>
            <Text style={styles.modalDetailsContainer}>
                <Text style={styles.modalDetailsLabel}>Description: </Text>
                <Text style={styles.modalDetailsText}>{item.description}</Text>
            </Text>
            <Text style={styles.modalDetailsContainer}>
                <Text style={styles.modalDetailsLabel}>Price: </Text>
                <Text style={styles.modalDetailsText}>£{price.toFixed(2)}</Text>
            </Text>
            {linkTag}
            {otherPricesTag}
        </View>
    )
}

const styles = StyleSheet.create({
    modalDetailsContainer: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 5,
        alignSelf: 'flex-start',
        alignItems: 'flex-start'
    },
    itemLinkText: {
        height: '100%',
        width: '100%',
        textAlign: 'center',
        color: 'blue',
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    detailsImage: {
        width: 150,
        height: 150,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 25,
        marginBottom: 15,
    },
    modalDetailsLabel: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    modalDetailsText: {
        fontSize: 22,
        flexWrap: 'wrap',
    },
});

export default ItemDetailsView
