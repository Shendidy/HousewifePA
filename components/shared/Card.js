import React from 'react'
import { View, Text, StyleSheet, Image, Linking } from 'react-native'

const Card = ({ store }) => {
    var infoLink = <Text></Text>;
    if(store.url)
    {
        infoLink = <Text style={{color: 'blue', textDecorationLine: 'underline'}}
                        onPress={() => Linking.openURL(store.url)}>
                        Visit their website
                    </Text>
    }
    return (
        <View style={styles.storeContainer} >
            <Image
                source={store.logo}
                style={styles.logo}
            />
            <View>
                <Text style={{color: 'black'}}>{store.name}</Text>
                <Text style={{color: 'black'}}></Text>
                {infoLink}
            </View>
            <View style={{height:'100%'}}>
                <Text style={{color: 'red', textDecorationLine: 'underline'}}>X</Text>
            </View>
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
        alignItems: 'center'
    },
    logo: {
        width: 100,
        height: '100%',
        marginRight: 5,
        resizeMode: 'contain',
    },
})

export default Card