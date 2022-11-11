import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'
import client from '../sanity'

const FeaturedRow = ({id, title, description}) => {
  const [restaurants, setRestaurants] = useState()

  useEffect(() => {
    client.fetch(`
    *[_type == "featured" && _id == $id]{
      ...,
      restaurants[]->{
        ...,
        dishes[]->,
         type->{name}
      }
    }[0]
    `,{id}).then((data) => setRestaurants(data?.restaurants))
  }, [])
  console.log(restaurants)
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <ArrowRightIcon color={"#00ccbb"} />
      </View>
      <Text style={styles.desc}>{description}</Text>

      <ScrollView
        style={styles.scrollView}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
      >
      {/* Restaurant Card */}

      {
        restaurants?.map((restaurant) => (
          <RestaurantCard 
            key={restaurant._id}
            id={restaurant._id}
            imgUrl={restaurant.image}
            title={restaurant.name}
            rating = {restaurant.rating}
            genre={restaurant.type?.name}
            address = {restaurant.address}
            short_description={restaurant.short_description}
            dishes= {restaurant.dishes}
            long={restaurant.long}
            lat={restaurant.lat}
          /> 
        ))
      }

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  title: {
    fontWeight: '600',
    fontSize: 18
  },
  desc: {
    color: 'grey',
    paddingHorizontal: 10,
  },
  scrollView: {
    paddingTop: 10
  }
})

export default FeaturedRow 