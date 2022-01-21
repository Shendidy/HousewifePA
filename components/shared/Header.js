import React from 'react'
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native'

const Header = ({navigation, screenToShow='HomeScreen'}) => {
    let nameLogo, settingsIcon;

    switch(screenToShow){
        case 'HomeScreen':
            nameLogo = require('../../assets/images/name_logo_red.png');
            settingsIcon = require('../../assets/images/settings_icon.png');
            break;
        case 'SettingsScreen':
            nameLogo = require('../../assets/images/name_logo.png');
            settingsIcon = require('../../assets/images/settings_icon_red.png');
            break;
        default:
            nameLogo = require('../../assets/images/name_logo.png');
            settingsIcon = require('../../assets/images/settings_icon.png');
    }

    return (
        <View style={[styles.container, {paddingTop: 5}]}>
            <TouchableOpacity
                style={styles.logoButton}
                onPress={() => {if(screenToShow !== 'HomeScreen') navigation.push('HomeScreen')}}
            >
                <Image 
                    style={[styles.logo]} 
                    source={nameLogo} 
                />
            </TouchableOpacity>

            <View style={styles.iconsContainer}>
                <TouchableOpacity
                    onPress={() => {if(screenToShow !== 'SettingsScreen') navigation.push('SettingsScreen')}}
                >
                    <Image
                        style={[styles.icon]}
                        source={settingsIcon}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    totalBadge: {
        backgroundColor: 'black',
        borderColor: 'red',
        borderWidth: 1,
        position: 'absolute',
        left: 15,
        bottom: 25,
        width: 65,
        height: 20,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100,
    },
    totalBadgeText: {
        color: 'white',
        fontWeight: '600',
        marginTop: -3,
    },
    icon: {
        width: 48,
        height: 48,
        resizeMode: 'contain'
    },
    iconsContainer: {
        flexDirection: 'row',
        marginTop: 0,
    },
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 10,
    },
    logo: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    logoButton: {
        width: '50%',
        height: 50
    },
})

export default Header
