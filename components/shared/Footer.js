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
    
    <View style={styles.container} >
        <TouchableOpacity onPress={() => {if(screenToShow !== 'CartsScreen') navigation.push('CartsScreen')}} style={styles.iconContainer} >
            <View>
                <View style={styles.totalBadge}>
                    <Text style={styles.totalBadgeText}>£0.00</Text>
                </View>
                
                <Image
                    style={[styles.icon]}
                    source={cartIcon}
                />
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {if(screenToShow !== 'StoresScreen') navigation.push('StoresScreen')}} style={styles.iconContainer} >
            <View>
                <Image
                    style={[styles.icon]}
                    source={storeIcon}
                />
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {if(screenToShow !== 'RecipesScreen') navigation.push('RecipesScreen')}} style={styles.iconContainer} >
            <View>
                <Image
                    style={[styles.icon]}
                    source={recipeIcon}
                />
            </View>
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
      left: 30,
      bottom: -15,
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
  iconContainer: {
    backgroundColor: '#rgba(0,0,255,0.7)',
    width: 72,
    height: 72,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 36,
    marginBottom: 50,
  },
  icon: {
      width: 36,
      height: 36,
      resizeMode: 'contain'
  },
  container: {
      justifyContent: 'space-around',
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: '#rgba(255,255,255,0)',
      height: 30,
      width: '100%',
  },
})

export default Footer
