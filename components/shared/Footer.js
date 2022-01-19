import React, { useState, useEffect } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

const Footer = ({navigation, screenToShow='HomeScreen'}) => {
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
      backgrounds: {
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
    
    <View style={styles.container}>
        <TouchableOpacity
            onPress={() => navigation.push('CartsScreen')}
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
            onPress={() => navigation.push('StoresScreen')}
        >
            <Image
                style={[styles.icon, {backgroundColor:bgColors.backgrounds.storesBackground}]}
                source={require('../../assets/images/store_icon.png')}
            />
        </TouchableOpacity>

        <TouchableOpacity
            onPress={() => navigation.push('RecepiesScreen')}
        >
            <Image
                style={[styles.icon, {backgroundColor:bgColors.backgrounds.recepiesBackground}]}
                source={require('../../assets/images/recipe_icon.png')}
            />
        </TouchableOpacity>
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
      width: 36,
      height: 36,
      //marginLeft: 10,
      resizeMode: 'contain'
  },
  iconsContainer: {
      flexDirection: 'row',
      marginTop: 20,
  },
  iconsContainer2: {
    backgroundColor: 'blue',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  container: {
      justifyContent: 'space-around',
      alignItems: 'center',
      flexDirection: 'row',
      //marginHorizontal: 10,
      backgroundColor: 'black',
      height: 40,
      width: '100%',
  },
  logoButton: {
      width: '50%',
      height: 50
  },
})

export default Footer
