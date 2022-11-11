import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Currency from 'react-currency-formatter'
import {urlFor} from '../sanity'

const Dishes = ({id, name, description, price, image}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.touchOpc}>
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
    }
})
export default Dishes