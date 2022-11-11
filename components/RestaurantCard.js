import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import { StarIcon } from 'react-native-heroicons/outline'
import {MapPinIcon} from 'react-native-heroicons/outline'
import { urlFor } from '../sanity'

const RestaurantCard = ({id, imgUrl, genre, title, rating, address, short_description, dishes, long, lat}) => {
  return (
    <TouchableOpacity style={styles.touchOpc}>
      <Image style={styles.image} source={{uri: urlFor(imgUrl).url()}} />

      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.ratingContainer}>
            <StarIcon color="green" opacity={0.5} size={22} />
            <Text style={styles.rating}> <Text>{rating}</Text> • {genre}</Text>
        </View>
        <View style={styles.ratingContainer}>
            <MapPinIcon color="gray" size={22} opacity={0.4} />
            <Text style={styles.rating}>Nearby • {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  touchOpc : {
    backgroundColor : 'white',
    marginRight: 8,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,
  },
  image: {
    width: '100%',
    height: 100,
  },
  textContainer: {
    paddingHorizontal: 10,
    paddingBottom: 10
  },
  title: {
    paddingTop: 5,
    fontWeight: 'bold',
  },
  ratingContainer : {
    flexDirection : 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 12
  }
})

export default RestaurantCard