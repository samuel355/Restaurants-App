import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'

const CategoryCard = ({imgUrl, title, id}) => {
  return (
    <TouchableOpacity style={styles.container}>
        <Image style={styles.image} source={{uri: imgUrl}} />
        <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
    position: 'relative'
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10
  },
  title: {
    position: 'absolute',
    color: 'black',
    fontWeight : 'bold',
    left: 5,
    bottom: 0,
    backgroundColor: 'white'
  }
})

export default CategoryCard