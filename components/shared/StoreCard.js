import React, { useCallback } from 'react'
import { View, Text, StyleSheet, Image, Linking, TouchableOpacity } from 'react-native'
import StoreItems from '../home/StoreItems';

const StoreCard = ({ store, onScreenChange }) => {
    var infoLink = <Text></Text>;
    if(store.url)
    {
        infoLink = <View style={styles.infoLink}>
                        <Text style={styles.infoLinkText}
                            onPress={() => Linking.openURL(store.url)}>
                            Visit their website
                        </Text>
                    </View>
    }
    return (
        <View style={styles.storeContainer} >
            <TouchableOpacity
                style={styles.mainCard}
                onPress={useCallback(event => {
                    onScreenChange(<StoreItems store={store} onScreenChange = {onScreenChange} />)
                  }, [onScreenChange])}
            >
                <Image
                    source={store.logo}
                    style={styles.logo}
                />
                <View style={styles.details}>
                    <Text style={styles.detailsText}>{store.name}</Text>
                    {infoLink}
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.delete}>
                <Text style={styles.deleteText}>X</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    storeContainer: {
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
    logo: {
        width: 100,
        height: '100%',
        marginRight: 5,
        resizeMode: 'contain',
        flex: 2,
    },
    details: {
        flex: 4,
        display: 'flex',
    },
    detailsText: {
        color: 'black',
        fontSize: 18,
        flex: 2,
    },
    infoLink: {
        height: 25,
        textDecorationLine: 'underline',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    infoLinkText: {
        height: '100%',
        width: '100%',
        textAlign: 'center',
        color: 'blue',
    },
    delete: {
        height:'50%',
        flex: 1,
        alignItems: 'flex-end',
    },
    deleteText: {
        color: 'red',
        textDecorationLine: 'underline',
        width: 15,
        height: 25,
        textAlign: 'right',
    },
})

export default StoreCard