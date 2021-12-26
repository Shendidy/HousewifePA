import React from 'react'
import { View, Text, StyleSheet, Image, Linking, TouchableOpacity } from 'react-native'

const Card = ({ store }) => {
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
            <Image
                source={store.logo}
                style={styles.logo}
            />
            <View style={styles.details}>
                <Text style={styles.detailsText}>{store.name}</Text>
                {infoLink}
            </View>
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

export default Card