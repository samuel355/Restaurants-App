import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux';
import { selectRestaurant } from '../features/restaurantSlice';
import * as Progress from 'react-native-progress'
import { XCircleIcon } from 'react-native-heroicons/outline';
import MapView, {Marker} from 'react-native-maps'

const DeliveryScreen = () => {

    const navigation = useNavigation()
    const restaurant = useSelector(selectRestaurant)

    return (
        <View>
            <SafeAreaView style={styles.main}>
                <View style={styles.container}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <XCircleIcon color='white' size={30} />
                    </TouchableOpacity>
                    <Text style={styles.title}>Order Help</Text>
                </View>

                {/* <View style={styles.box}>
                    <View style={styles.boxContainer}>
                        <View>
                            <Text style={styles.est}>Estimated Arrival</Text>
                            <Text style={styles.time}>15 - 30min</Text>
                        </View>
                        <Image style={styles.boxImage} source={require('../assets/delivery-food.gif')} />
                    </View>
                    <Progress.Bar style={{marginTop: 8}} size={30} color="#00ccbb" indeterminate={true} />
                    <Text style={styles.orderText}>Your Order at <Text style={{color: 'black', fontSize: 18}}>{restaurant.title}</Text> is being Prepared</Text>
                </View> */}
            </SafeAreaView>

            <MapView
                initialRegion={{
                    latitude: restaurant.lat,
                    longitude: restaurant.long,
                    longitudeDelta: 20
                }}
                height={'90%'}
                width= {'100%'}
                mapType='mutedStandard'
                styles={styles.map}
            >
                <Marker
                    coordinate={{
                        latitude: restaurant.lat,
                        longitude: restaurant.long
                    }}
                    title={restaurant.title}
                    description={restaurant.short_description}
                    identifier="origin"
                    pinColor='orange'
                />
            </MapView>
            <SafeAreaView style={{backgroundColor: 'white', padding: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',}}>
                <Text>Samuel</Text>
                <Text> Call </Text>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#00ccbb',
        position: 'relative',
      },
      image: {
        width: 500,
        height: '50%',
        objectFit: 'contain',
        
      },
      container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 10,
        marginHorizontal: 12,
        
      },
      title: {
        fontWeight: '500',
        fontSize: 16,
        color: 'white',
        paddingRight: 4
      },
      box: {
        backgroundColor:'white',
        marginHorizontal: 15,
        marginVertical: 15,
        borderRadius: 6,
        padding: 20,
        position: 'absolute',
        width: '92%',
        top: 100,
        zIndex: 100,


        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 1,
      },
      boxContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      est: {
        color: 'grey',
        fontWeight: '500',
        paddingVertical: 5,
        fontSize: 14,
      },
      time: {
        fontWeight: '800',
        fontSize: 24
      },
      boxImage: {
        width: 60,
        height: 60,
      },
      orderText: {
        color: 'grey',
        fontWeight: '500',
        fontSize: 15,
        marginTop: 8,
      },
      map: {
        flex: 1,
        marginTop: -10,
        zIndex: 0
      }
})
export default DeliveryScreen