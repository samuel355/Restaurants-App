import React from 'react';
import {View, Text, SafeAreaView, Image, TextInput, ScrollView} from 'react-native';
import {
  ChevronDownIcon,
  UserIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
  SearchIcon,
  AdjustmentsIcon,
} from 'react-native-heroicons/outline';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      {/* Header */}
      <View className="bg-white pt-5">
        <View className="flex-row pb-3 items-center mx-4 space-x-2">
          <Image
            className="w-7 h-7 bg-gray-300 p-4 rounded-full"
            source={{uri: 'https://links.papareact.com/wru'}}
          />
          <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">Deliver Now</Text>
            <Text className="font-bold text-xl">
              Current Location.
              <ChevronDownIcon size={20} color="#00ccbb" />
            </Text>
          </View>
          <UserIcon size={35} color="#00ccbb" />
        </View>

        {/* Search Box */}

        <View className="flex-row items-center space-x-2 pb-2 mx-4">
          <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3 rounded-3xl">
            <MagnifyingGlassIcon color="#00ccbb" />
            <TextInput placeholder='Restaurants and Cuisines' keyboardType='default' />
          </View>
          <AdjustmentsVerticalIcon color="#00ccbb"  />
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Categories */}
        <Categories />

        {/* Featured Rows */}
        <FeaturedRow 
          id="1"
          title="Featured"
          description = "Paid bla bla"
        />

        <FeaturedRow 
          id="2"
          title="Featured"
          description = "Paid bla bla"
        />

        <FeaturedRow 
          id="3"
          title="Featured"
          description = "Paid bla bla"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
