import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable'
import * as Progress from 'react-native-progress'
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

const PlaceOrder = () => {
  const navigation = useNavigation()

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Delivery')
    }, 5000) //5sec
  }, [navigation])

  return (
    <SafeAreaView style={styles.main}>
      <Animatable.Image
        style={styles.image}
        source={require('../assets/food-interaction.gif')}
        animation="slideInUp"
        iterationCount ={1}
      />
      <Animatable.Text animation="slideInLeft" iterationCount ={5} style={styles.title} >
        Waiting For Restaurant to Accept Your Order!
      </Animatable.Text>

      <Progress.Circle style={styles.progress} size={35} indeterminate={true} color="#00ccbb" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 500,
    height: '50%',
    objectFit: 'contain'
  },
  container: {

  },
  title: {
    fontWeight: '500',
    fontSize: 18,
    marginTop: 15,
    marginHorizontal: 10,
    textAlign: 'center',
    color: '#00ccbb'
  },
  progress: {
    marginTop: 20
  }

})
export default PlaceOrder