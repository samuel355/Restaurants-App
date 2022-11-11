import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'

const CategoryCard = ({imgUrl, title}) => {
  return (
    <TouchableOpacity style={styles.container} className="mr-2 relative">
        <Image style={styles.image} className="w-20 h-20 rounded" source={{uri: imgUrl}} />
        <Text style={styles.title} className="absolute bottom-1 left-1 text-white font-bold">{title}</Text>
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
    color: 'white',
    fontWeight : 'bold',
    left: 5,
    bottom: 5
  }
})

export default CategoryCard