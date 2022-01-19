import React from 'react'
import Carts from '../components/carts/Carts'

export default CartsScreen = ({ navigation, route }) => ( <Carts navigation={navigation} route={route.params} /> )