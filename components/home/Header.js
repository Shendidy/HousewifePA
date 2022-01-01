import React, { useState, useCallback } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

import Items from './Carts'
import Stores from './Stores'
import Recepies from './Recepies'
import Home from './Home'

const Header = ({ onScreenChange }) => {
    const [bgColors, setBgColors] = useState({
        backgrounds:{
            homeBackground: 'red',
            cartsBackground: 'black',
            storesBackground: 'black',
            recepiesBackground: 'black'
        }
    });

    function resetBackgrounds(){
        setBgColors({
            backgrounds:
            {
                homeBackground: 'black',
                cartsBackground: 'black',
                storesBackground: 'black',
                recepiesBackground: 'black'
            }
        });
    }
    
    function setScreen(screenToShow, screenBackground){
        resetBackgrounds();

        if(screenBackground === 'home') setBgColors((prevState) => ({...prevState, backgrounds: { ...prevState.backgrounds, homeBackground: 'red'}}));
        if(screenBackground === 'carts') setBgColors((prevState) => ({...prevState, backgrounds: { ...prevState.backgrounds, cartsBackground: 'red'}}));
        if(screenBackground === 'stores') setBgColors((prevState) => ({...prevState, backgrounds: { ...prevState.backgrounds, storesBackground: 'red'}}));
        if(screenBackground === 'recepies') setBgColors((prevState) => ({...prevState, backgrounds: { ...prevState.backgrounds, recepiesBackground: 'red'}}));
        onScreenChange(screenToShow);
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.logoButton}
                onPress={useCallback(event => {
                    setScreen(<Home />, 'home')
                    }, [onScreenChange])}
            >
                <Image 
                    style={[styles.logo, {backgroundColor:bgColors.backgrounds.homeBackground}]} 
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
        left: 25,
        bottom: 20,
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
        resizeMode: 'contain',
    },
    logoButton: {
        width: '50%',
        height: 50
    },
})

export default Header
