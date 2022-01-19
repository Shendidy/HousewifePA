import React, { useState, useEffect } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

const Header = ({navigation, screenToShow='HomeScreen'}) => {
    const [screenShown, setScreenShown] = useState(screenToShow);
    const activeIconBackground = 'blue';
    const inactiveIconBackground = 'black';
    const [bgColors, setBgColors] = useState({
        backgrounds:{
            homeBackground: activeIconBackground,
            cartsBackground: inactiveIconBackground,
            storesBackground: inactiveIconBackground,
            recepiesBackground: inactiveIconBackground
        }
    });

    function resetBackgrounds(){
        setBgColors({
            backgrounds:
            {
                homeBackground: inactiveIconBackground,
                cartsBackground: inactiveIconBackground,
                storesBackground: inactiveIconBackground,
                recepiesBackground: inactiveIconBackground
            }
        });
    }
    
    function setScreen(screen){
        resetBackgrounds();

        switch(screen){
            case 'HomeScreen':
                setBgColors((prevState) => ({...prevState, backgrounds: { ...prevState.backgrounds, homeBackground: activeIconBackground}}));
                break;
            case 'CartsScreen':
                setBgColors((prevState) => ({...prevState, backgrounds: { ...prevState.backgrounds, cartsBackground: activeIconBackground}}));
                break;
            case 'StoresScreen':
                setBgColors((prevState) => ({...prevState, backgrounds: { ...prevState.backgrounds, storesBackground: activeIconBackground}}));
                break;
            case 'RecepiesScreen':
                setBgColors((prevState) => ({...prevState, backgrounds: { ...prevState.backgrounds, recepiesBackground: activeIconBackground}}));
                break;
            default:
                resetBackgrounds();
        }
    }

    useEffect(() => {
        setScreenShown(screenToShow);
        setScreen(screenShown);
    },[]);

    return (
        <View style={[styles.container, {paddingTop: 5}]}>
            <TouchableOpacity
                style={styles.logoButton}
                onPress={() => navigation.push('HomeScreen')}
            >
                <Image 
                    style={[styles.logo, {borderWidth: 2, borderColor:bgColors.backgrounds.homeBackground}]} 
                    source={require('../../assets/images/name_logo_white_004i.png')} 
                />
            </TouchableOpacity>

            <View style={styles.iconsContainer}>
                <TouchableOpacity
                    onPress={() => navigation.push('RecepiesScreen')}
                >
                    <Image
                        style={[styles.icon, {backgroundColor:bgColors.backgrounds.recepiesBackground}]}
                        source={require('../../assets/images/settings_icon.png')}
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
