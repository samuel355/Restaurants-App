import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { StarIcon } from 'react-native-heroicons/outline'
import {MapPinIcon} from 'react-native-heroicons/outline'

const RestaurantCard = ({id, imgUrl, genre, title, rating, address, short_description, dishes, long, lat}) => {
  return (
    <TouchableOpacity className="bg-white mr-3 shadow">
      <Image className="w-64 h-64 rounded-sm" source={{uri: imgUrl}} />

      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
            <StarIcon color="green" opacity={0.5} size={22} />
            <Text className="text-xs text-green-800"> <Text className="text-green-800">{rating}</Text> • {genre}</Text>
        </View>
        <View className="flex-row items-center space-x-1">
            <MapPinIcon color="gray" size={22} opacity={0.4} />
            <Text className="text-xs text-gray-500">Nearby • {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default RestaurantCard