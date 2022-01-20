import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

const Footer = ({navigation, screenToShow='HomeScreen'}) => {
    let cartIcon, storeIcon, recipeIcon;

    switch(screenToShow){
        case 'CartsScreen':
            cartIcon = require('../../assets/images/cart_plus_icon_red.png');
            storeIcon = require('../../assets/images/store_icon.png');
            recipeIcon = require('../../assets/images/recipe_icon.png');
            break;
        case 'StoresScreen':
            cartIcon = require('../../assets/images/cart_plus_icon.png');
            storeIcon = require('../../assets/images/store_icon_red.png');
            recipeIcon = require('../../assets/images/recipe_icon.png');
            break;
        case 'RecipesScreen':
            cartIcon = require('../../assets/images/cart_plus_icon.png');
            storeIcon = require('../../assets/images/store_icon.png');
            recipeIcon = require('../../assets/images/recipe_icon_red.png');
            break;
        default:
            cartIcon = require('../../assets/images/cart_plus_icon.png');
            storeIcon = require('../../assets/images/store_icon.png');
            recipeIcon = require('../../assets/images/recipe_icon.png');
    }
  
  return (
    
    <View style={styles.container}>
        <TouchableOpacity
            onPress={() => navigation.push('CartsScreen')}
        >
            <View style={styles.totalBadge}>
                <Text style={styles.totalBadgeText}>£0.00</Text>
            </View>
            <Image
                style={[styles.icon]}
                source={cartIcon}
            />
        </TouchableOpacity>

        <TouchableOpacity
            onPress={() => navigation.push('StoresScreen')}
        >
            <Image
                style={[styles.icon]}
                source={storeIcon}
            />
        </TouchableOpacity>

        <TouchableOpacity
            onPress={() => navigation.push('RecipesScreen')}
        >
            <Image
                style={[styles.icon]}
                source={recipeIcon}
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
      left: 35,
      bottom: 30,
      width: 65,
      height: 20,
      borderRadius: 25,
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 999,
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
  container: {
      justifyContent: 'space-around',
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: 'black',
      height: 40,
      width: '100%',
  },
})

export default Footer
