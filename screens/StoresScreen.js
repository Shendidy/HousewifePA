import React from 'react'
import { View, Text } from 'react-native'
import Stores from '../components/stores/Stores'

export default StoresScreen = ({ navigation, route }) => ( <Stores navigation={navigation} params={route.params} /> )
