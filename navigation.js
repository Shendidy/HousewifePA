import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import AddItemScreen from './screens/AddItemScreen';
import AddStoreScreen from './screens/AddStoreScreen';
import CartsScreen from './screens/CartsScreen';
import HomeScreen from './screens/HomeScreen';
import RecepiesScreen from './screens/RecepiesScreen';
import StoreItemsScreen from './screens/StoreItemsScreen';
import StoresScreen from './screens/StoresScreen';
import SettingsScreen from './screens/SettingsScreen';

const stack = createStackNavigator();
const screenOptions = {
  headerShown: false,
}

const SignedInStack = () => (
    <NavigationContainer>
      <stack.Navigator
        initialRouteName='HomeScreen'
        screenOptions={screenOptions}
      >
        <stack.Screen name='AddItemScreen' component={AddItemScreen} options={{ cardStyle:{backgroundColor: 'black'} }} />
        <stack.Screen name='AddStoreScreen' component={AddStoreScreen} options={{ cardStyle:{backgroundColor: 'black'} }} />
        <stack.Screen name='CartsScreen' component={CartsScreen} options={{ cardStyle:{backgroundColor: 'black'} }} />
        <stack.Screen name='HomeScreen' component={HomeScreen} options={{ cardStyle:{backgroundColor: 'black'} }} />
        <stack.Screen name='RecepiesScreen' component={RecepiesScreen} options={{ cardStyle:{backgroundColor: 'black'} }} />
        <stack.Screen name='StoreItemsScreen' component={StoreItemsScreen} options={{ cardStyle:{backgroundColor: 'black'} }} />
        <stack.Screen name='StoresScreen' component={StoresScreen} options={{ cardStyle:{backgroundColor: 'black'} }} />
        <stack.Screen name='SettingsScreen' component={SettingsScreen} options={{ cardStyle:{backgroundColor: 'black'} }} />
      </stack.Navigator>
    </NavigationContainer>
  )

export default SignedInStack
