import React, { useEffect, useState } from 'react';
import {View, Text, SafeAreaView, Image, TextInput, ScrollView, StyleSheet} from 'react-native';
import {
  ChevronDownIcon,
  UserIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from 'react-native-heroicons/outline';

import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';

import client from '../sanity'

const HomeScreen = () => {
  const [featuredCategories, setFeaturedCategories] = useState([])

  useEffect(() => {
    client.fetch(`
    *[_type == "featured"]{
      ...,
      restaurants[]->{
        ...,
        dishes[]->{
          ...,
        }
      }
    }
    `).then(data => {
      setFeaturedCategories(data)
    })
  }, [])

  return (
    <SafeAreaView style={{marginBottom: 120}}>
      {/* Header */}
      <View style={styles.main}>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={{uri: 'https://links.papareact.com/wru'}}
          />
          <View style={styles.subContainer}>
            <Text style={styles.deliverTitle}>Deliver Now</Text>
            <Text style={styles.cLocation}>
              Current Location
              <ChevronDownIcon  size={22} color="#00ccbb" />
            </Text>
          </View>
          <UserIcon size={35} color="#00ccbb" />
        </View>

        {/* Search Box */}

        <View style={styles.searchBoxContainer}>
          <View style={styles.searchBox}>
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
        {
          featuredCategories?.map((category) => (
            <FeaturedRow 
              key={category.id}
              id={category._id}
              title={category.name}
              description = {category.short_description}
            />
          ))
        }
      </ScrollView>
    </SafeAreaView>
  );
};

const styles= StyleSheet.create({
  main: {
    backgroundColor: 'white',
    paddingTop: 10
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    paddingBottom: 10
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'grey'
  },
  subContainer: {
    flex: 1,
    marginLeft: 8
  },
  deliverTitle: {
    color: 'grey',
    fontWeight: 'bold',
    fontSize: 12
  },
  cLocation: {
    fontWeight: '700',
    fontSize: 20
  },
  caretDownIcon : {
    marginTop: 5
  },
  searchBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    paddingVertical: 10
  },
  searchBox: {
    flex: 1,
    backgroundColor: 'grey',
    flexDirection: 'row',
    padding: 8,
    borderRadius: 20
  }

})
export default HomeScreen;
