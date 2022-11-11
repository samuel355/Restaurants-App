import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectRestaurant } from '../features/restaurantSlice';

const CartScreen = () => {
  const navigation = useNavigation()
  const restaurant = useSelector(selectRestaurant)
console.log(restaurant)
  return (
    <SafeAreaView>
      <Text>CartScreen</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        
    }
})
export default CartScreen