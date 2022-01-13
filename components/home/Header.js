import React, { useState, useCallback } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

import Items from './Carts'
import Stores from './Stores'
import Recepies from './Recepies'
import Home from './Home'

const Header = ({ onScreenChange }) => {
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
    
    function setScreen(screenToShow, screenBackground){
        resetBackgrounds();

        switch(screenBackground){
            case 'home':
                setBgColors((prevState) => ({...prevState, backgrounds: { ...prevState.backgrounds, homeBackground: activeIconBackground}}));
                break;
            case 'carts':
                setBgColors((prevState) => ({...prevState, backgrounds: { ...prevState.backgrounds, cartsBackground: activeIconBackground}}));
                break;
            case 'stores':
                setBgColors((prevState) => ({...prevState, backgrounds: { ...prevState.backgrounds, storesBackground: activeIconBackground}}));
                break;
            case 'recepies':
                setBgColors((prevState) => ({...prevState, backgrounds: { ...prevState.backgrounds, recepiesBackground: activeIconBackground}}));
                break;
            default:
                resetBackgrounds();
        }

        onScreenChange(screenToShow);
    }

    return (
        <View style={[styles.container, {paddingTop: 5}]}>
            <TouchableOpacity
                style={styles.logoButton}
                onPress={useCallback(event => {
                    setScreen(<Home />, 'home')
                    }, [onScreenChange])}
            >
                <Image 
                    style={[styles.logo, {borderWidth: 2, borderColor:bgColors.backgrounds.homeBackground}]} 
                    source={require('../../assets/images/name_logo_white_004i.png')} 
                />
            </TouchableOpacity>

            <View style={styles.iconsContainer}>
                <TouchableOpacity
                    onPress={useCallback(event => {
                        setScreen(<Items />, 'carts')
                      }, [onScreenChange])}
                >
                    <View style={styles.totalBadge}>
                        <Text style={styles.totalBadgeText}>£0.00</Text>
                    </View>
                    <Image
                        style={[styles.icon, {backgroundColor:bgColors.backgrounds.cartsBackground}]}
                        source={require('../../assets/images/cart_plus_icon.png')}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={useCallback(event => {
                        setScreen(<Stores onScreenChange={ onScreenChange } />, 'stores')
                      }, [onScreenChange])}
                >
                    <Image
                        style={[styles.icon, {backgroundColor:bgColors.backgrounds.storesBackground}]}
                        source={require('../../assets/images/store_icon.png')}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={useCallback(event => {
                        setScreen(<Recepies />, 'recepies')
                      }, [onScreenChange])}
                >
                    <Image
                        style={[styles.icon, {backgroundColor:bgColors.backgrounds.recepiesBackground}]}
                        source={require('../../assets/images/recipe_icon.png')}
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
        height: 18,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100
    },
    totalBadgeText: {
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
        flexDirection: 'row',
        marginTop: 20,
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
