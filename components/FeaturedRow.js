import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({id, title, description}) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color={"#00ccbb"} />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        className="pt-4"
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
      >
      {/* Restaurant Card */}
      <RestaurantCard 
        id={123}
        imgUrl="https://links.papareact.com/gn7"
        title="Yo Sush"
        rating = {4.5}
        genre="Japanese"
        address = "123 main st"
        short_description={"this is a short description"}
        dishes= {[]}
        long={""}
        lat={""}
      /> 

      <RestaurantCard 
        id={123}
        imgUrl="https://links.papareact.com/gn7"
        title="Yo Sush"
        rating = {4.5}
        genre="Japanese"
        address = "123 main st"
        short_description={"this is a short description"}
        dishes= {[]}
        long={""}
        lat={""}
      /> 

      <RestaurantCard 
        id={123}
        imgUrl="https://links.papareact.com/gn7"
        title="Yo Sush"
        rating = {4.5}
        genre="Japanese"
        address = "123 main st"
        short_description={"this is a short description"}
        dishes= {[]}
        long={""}
        lat={""}
      /> 

      <RestaurantCard 
        id={123}
        imgUrl="https://links.papareact.com/gn7"
        title="Yo Sush"
        rating = {4.5}
        genre="Japanese"
        address = "123 main st"
        short_description={"this is a short description"}
        dishes= {[]}
        long={""}
        lat={""}
      /> 

      </ScrollView>
    </View>
  )
}

export default FeaturedRow 