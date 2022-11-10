import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView 
        horizontal      
        showsHorizontalScrollIndicator = {false}
        contentContainerStyle={{
            paddingHorizontal: 15,
            paddingTop: 10
        }}>
      {/* CategoryCard */}
      <CategoryCard imgUrl='https://links.papareact.com/gn7' title="title" />
      <CategoryCard imgUrl='https://links.papareact.com/gn7' title="title" />
      <CategoryCard imgUrl='https://links.papareact.com/gn7' title="title" />
      <CategoryCard imgUrl='https://links.papareact.com/gn7' title="title" />
      <CategoryCard imgUrl='https://links.papareact.com/gn7' title="title" />
      <CategoryCard imgUrl='https://links.papareact.com/gn7' title="title" />
    </ScrollView>
  )
}

export default Categories