import React from 'react'
import { View } from 'react-native'
import AddItem from '../components/addItem/AddItem'

export default AddItemScreen = ({ navigation, route }) => {
  let pass;
  //if(route === null) pass=<AddItem navigation={navigation} />
  //else pass=<AddItem navigation={navigation} route={route} />
  // return (
  //   <View>
  //     {pass}
  //   </View>
  // );
  return(<AddItem navigation={navigation} route={route} />);
}
