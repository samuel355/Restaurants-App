import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import Currency from 'react-currency-formatter'
import {urlFor} from '../sanity'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/outline'
import {useDispatch, useSelector} from 'react-redux'
import { addToBasket, removeFromBasket, selectBasketItemsWithId } from '../features/basketSlice'

const Dishes = ({id, name, description, price, image}) => {
    const [isPressed, setIsPressed] = useState(false)

    const dispatch = useDispatch()
    const items = useSelector( (state) => selectBasketItemsWithId(state, id))

    const addItemToBasket = () => {
        dispatch(addToBasket({id, name, description, price, image}))
    }
    const removeItemFromBasket =() => {
        if(!items.length > 0 ){
            setIsPressed(false)
            return;
        };
        
        dispatch(removeFromBasket({id}))
    }

    return (
        <>
            <View style={styles.container}>
                <TouchableOpacity style={styles.touchOpc} onPress={() => setIsPressed(!isPressed)}>
                    <View>
                        <Text style={styles.name}>{name}</Text>
                        <Text style={styles.desc}>{description}</Text>
                        <Text>
                            <Currency quantity={ price } currency="GBP" />
                        </Text>
                    </View>
                    <View>
                        <Image style={styles.image} source={{uri: urlFor(image).url()}} />
                    </View>
                </TouchableOpacity>
            </View>

            { 
                isPressed && (
                    <View style={styles.countContainer}>
                        <View style={styles.inner}>
                            
                            <TouchableOpacity onPress={removeItemFromBasket}>
                                <MinusCircleIcon color={items?.length > 0 ? '#00ccbb' : 'grey' }  size={40} />
                            </TouchableOpacity>

                            <Text style={styles.count}>{items.length}</Text>

                            <TouchableOpacity onPress={addItemToBasket}>
                                {/* color={items?.length > 0 ? '#00ccbb' : 'grey' } */}
                                <PlusCircleIcon  color={items?.length > 0 ? '#00ccbb' : 'grey' } size={40} />
                            </TouchableOpacity>
                        </View>
                    </View>
                )
            }
        </>

    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        marginVertical: 6,
        backgroundColor: 'white',
        borderRadius: 8,

        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 1,
    },
    name: {
        fontSize: 20
    },
    desc: {
        color: 'grey',
        marginVertical: 5
    },
    image: {
        width: 80,
        height: 80,
        backgroundColor: 'grey',
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 50
    },
    touchOpc: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    },
    countContainer: {
        position : 'relative',
    },
    inner: {
        position : 'absolute',
        bottom : 35,
        left: 10,
        flexDirection: 'row',
        alignItems:'center',
        backgroundColor: '#d9d7d7',
        borderRadius: 20
    },
    countOpc: {
        flexDirection: 'row',
    },
    count :{
        marginHorizontal: 8,
        color: 'white',
        fontWeight: '500',
        fontSize: 16
    }
})
export default Dishes