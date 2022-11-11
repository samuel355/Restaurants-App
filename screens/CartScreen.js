import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import  React, {useState, useEffect} from 'react'
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { selectRestaurant } from '../features/restaurantSlice';
import { removeFromBasket, selectBasketItems, selectBasketTotal } from '../features/basketSlice';
import { XCircleIcon } from 'react-native-heroicons/outline';
import { urlFor } from '../sanity';
import Currency from 'react-currency-formatter'

const CartScreen = () => {

  const navigation = useNavigation()
  const restaurant = useSelector(selectRestaurant)
  const dispatch = useDispatch()
  const items = useSelector(selectBasketItems)
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([])
  const basketTotal = useSelector(selectBasketTotal)

  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {})

    setGroupedItemsInBasket(groupedItems);
  },[items])

  console.log(groupedItemsInBasket)

  return (
    <SafeAreaView>
      <View>
        <View style={styles.topContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.header}>Cart</Text>
            <Text style={styles.title}>{restaurant.title}</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <XCircleIcon color='#00ccbb' size={30} />
          </TouchableOpacity>
        </View>

        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{uri: 'https://links.papareact.com/wru'}} />
            <Text style={styles.deliver}>Deliver in 15-30mins</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.change}>Change</Text>
          </TouchableOpacity>
        </View>

        <ScrollView>
          {
            Object.entries(groupedItemsInBasket).map(([key,items]) => (
              <View key={key} style={styles.cartContainer}>
                <Text style={styles.length}>{items.length} x </Text>
                <Image style={styles.itemImage} source={{uri: urlFor(items[0]?.image).url()}} />
                <Text style={styles.name}>{items[0]?.name}</Text>
                <Text> <Currency quantity={items[0]?.price} currency="GBP" /> </Text>

                <TouchableOpacity onPress={() => dispatch(removeFromBasket({id: key}))}>
                  <XCircleIcon color='red' size={20} />
                </TouchableOpacity>
              </View>
            ))
          }
        </ScrollView>
      </View>

      <View style={styles.amountContainer}>
          <View style={styles.subtotalContainer}>
             <Text style={styles.moneyTitle}>Subtotal</Text>
             <Text style={styles.money}> <Currency quantity={basketTotal} currency="GBP" /> </Text>
          </View>

          <View style={styles.deliveryContainer}>
             <Text style={styles.moneyTitle}>Delivery Fee</Text>
             <Text style={styles.money}> <Currency quantity={5.99} currency="GBP" /> </Text>
          </View>

          <View style={styles.totalContainer}>
             <Text style={styles.total}>Total</Text>
             <Text style={styles.totalMoney}> <Currency quantity={basketTotal + 5.999} currency="GBP" /> </Text>
          </View>

          <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('PreparingOrderScreen')}>
            <Text style={styles.btnText}>Place Order</Text>
          </TouchableOpacity>
       </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginTop: 15,
        paddingVertical: 10
    },
    topContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: 'white',
      paddingBottom: 10,
      paddingRight: 10
    },
    headerContainer:{
      alignItems: 'center',
      marginTop: 10,
      flex: 1
    },  
    header: {
      fontWeight: '600',
      fontSize: 20,
    },
    title: {
      fontWeight: '500',
      fontSize: 16,
      color: 'grey'
    },
    imageContainer: {
      flexDirection:'row',
      alignItems: 'center',
    },
    image: {
      width: 40,
      height: 40,
      backgroundColor: 'grey',
      borderRadius: 10,
    },
    deliver: {
      marginLeft: 8
    },
    change: {
      color: '#00ccbb',
      fontWeight: '500',
      fontSize: 16
    },
    itemImage: {
      width: 50,
      height: 50,
      backgroundColor: 'grey',
      borderRadius: 8
    },
    cartContainer: {
      display: 'flex',
      flexDirection:'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 15,
      marginHorizontal: 10,
      backgroundColor: 'white',
      padding: 8
    },
    length: {
      fontWeight: '500',
      fontSize: 15,
      color:'gray'
    },
    name: {
      fontWeight: '500',
      fontSize: 16,
    },
    amountContainer: {
      marginHorizontal: 10
    },
    subtotalContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 20
    },
    deliveryContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginVertical: 15
    },
    totalContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    btn: {
      backgroundColor: '#00ccbb',
      marginTop: 15,
      borderRadius: 20
    },
    btnText: {
      color: 'white',
      textAlign: 'center',
      paddingVertical: 10,
      fontSize: 18,
      fontWeight: '700',
    },
    moneyTitle: {
      color:'gray',
      fontSize: 16,
      fontWeight: '600'
    },
    money: {
      color: 'gray',
    },
    totalMoney: {
      fontWeight: '700',
      fontSize: 17,
    },
    total: {
      fontWeight: '700',
      fontSize: 17,
    }
})
export default CartScreen