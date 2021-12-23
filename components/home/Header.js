import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

const Header = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.logoButton}>
                <Image 
                    style={styles.logo} 
                    source={require('../../assets/images/name_logo_white_004i.png')} 
                />
            </TouchableOpacity>

            <View style={styles.iconsContainer}>
                <TouchableOpacity>
                    <View style={styles.totalCartsBadge}>
                        <Text style={styles.totalCartsBadgeText}>5</Text>
                    </View>
                    <Image
                        source={require('../../assets/images/cart_plus_icon.png')}
                        style={styles.icon}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image
                        source={require('../../assets/images/store_icon.png')}
                        style={styles.icon}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image
                        source={require('../../assets/images/exit_icon.png')}
                        style={styles.icon}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    totalCartsBadge: {
        backgroundColor: 'black',
        borderColor: 'red',
        borderWidth: 1,
        position: 'absolute',
        left: 25,
        bottom: 20,
        width: 25,
        height: 18,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100
    },
    totalCartsBadgeText: {
        color: 'white',
        fontWeight: '600'
    },
    icon: {
        width: 24,
        height: 24,
        marginLeft: 10,
        resizeMode: 'contain'
    },
    iconsContainer: {
        flexDirection: 'row'
    },
    container: {
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
