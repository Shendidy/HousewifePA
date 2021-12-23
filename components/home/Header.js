import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

const Header = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.logoButton}>
                <Image 
                    style={styles.logo} 
                    source={require('../../assets/images/name_logo_white_003bi.png')} 
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 10
    },
    logo: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    logoButton: {
        width: '50%',
        height: 50
    }
})

export default Header
