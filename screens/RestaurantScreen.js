import { View, Text, StyleSheet , Image, TouchableOpacity, ScrollView} from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { urlFor } from '../sanity'
import { ArrowRightIcon, ArrowSmallLeftIcon, MapPinIcon, QuestionMarkCircleIcon, StarIcon } from 'react-native-heroicons/outline'
import Dishes from '../components/Dishes'

const RestaurantScreen = () => {
    const navigation = useNavigation()
    const {
        params : {
            id, imgUrl, genre, title, rating, address, short_description, dishes, long, lat
        }
    } = useRoute()

    return (
        <View>
            <View style={styles.container}>
                <Image style={styles.image} source={{uri: urlFor(imgUrl).url()}} />
                <TouchableOpacity style={styles.touchOpc} onPress={ () => navigation.goBack()}>
                    <ArrowSmallLeftIcon size={20} color="#00ccbb" />
                </TouchableOpacity>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.resName}>{title}</Text>
                <View style={styles.iconsContainer}>
                    <StarIcon color="green" opacity={0.5} size={22} />
                    <Text style={styles.rating}> {rating} • {genre} </Text>
                    <MapPinIcon color="green" size={22} opacity={0.4} />
                    <Text style={styles.address}>Near {address} </Text>
                </View>
                <Text style={styles.desc}>{short_description}</Text>                
            </View>
        
            <TouchableOpacity style={styles.allergyContainer}>
                <QuestionMarkCircleIcon size={20} color="green" opacity={0.4} />
                <Text style={styles.allergyTitle}>Have a food allergy</Text>
                <ArrowRightIcon size={20} color="green" opacity={0.4}  />
            </TouchableOpacity>

            <Text style={styles.menu}>Menu</Text>
            <ScrollView style={styles.scrollView} vertical showsVerticalScrollIndicator={false}>
                {
                    dishes.map((dish) => (
                        <Dishes 
                            key={dish._id}
                            id={dish._id}
                            name={dish.name}
                            description={dish.short_description}
                            price = {dish.price}
                            image = {dish.image}
                        />
                    ))
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'relative'
    },
    image: {
        width: '100%',
        height: 220,
        backgroundColor: 'grey',
        padding: 8,
    },
    touchOpc: {
        position: 'absolute',
        zIndex: 9,
        backgroundColor: 'white',
        top: 45,
        left: 10,
        padding: 6,
        borderRadius: 20
    },
    infoContainer: {
        marginHorizontal: 10,
        marginTop: 10
    },
    resName: {
        fontSize: 20,
        fontWeight: '700',
    },
    iconsContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8
    },
    rating: {
        marginHorizontal: 10,
        fontSize: 15,
        color: 'grey',
        fontWeight: '500'
    },
    address: {
        marginLeft: 10,
        fontSize: 15,
        color: 'grey',
        fontWeight: '500'
    },
    desc : {
        color: 'grey',
        fontSize: 16,
        marginTop: 8
    },
    allergyContainer: {
        flexDirection: 'row',
        marginTop: 15,
        alignItems: 'center',
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    allergyTitle: {
        flex: 1,
        marginLeft: 10
    },
    menu: {
        fontSize: 20,
        fontWeight: '700',
        marginVertical: 15,
        marginLeft: 10
    },
    scrollView: {
        marginBottom: 420
    },
    dishes: {
        marginHorizontal: 10
    }
})

export default RestaurantScreen