import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { selectBasketItems, selectBasketTotal } from '../features/basketSlice';
import { useNavigation } from '@react-navigation/native';
import Currency from 'react-currency-formatter'
import { ArrowSmallRightIcon } from 'react-native-heroicons/outline';

const BasketIcon = () => {
    const items = useSelector(selectBasketItems)
    const total = useSelector(selectBasketTotal)
    const navigation = useNavigation()

    if (items.length === 0) return null;
    
    return (
        items.length > 0 && (
            <View style={styles.container}>
                <TouchableOpacity style={styles.touchOpc} onPress={()=> navigation.navigate('Cart')}>
                    <Text style={styles.length}>{items.length}</Text>
                    <Text style={styles.total}>
                        <Currency quantity={ total } currency="GBP" />
                    </Text>
                    <Text style={styles.title}>View Cart<ArrowSmallRightIcon size={20} color="white" /> </Text>
                </TouchableOpacity>
            </View>
        )
    )
}

const styles = StyleSheet.create({
    container : {
        position : 'absolute',
        bottom : 30,
        backgroundColor: '#00ccbb',
        padding: 10,
        left: 20,
        zIndex: 100,
        alignSelf: 'center',
        width: '90%',
        opacity: 0.9,
        borderRadius: 25
    },
    length: {
        backgroundColor: 'white',
        opacity: 0.8,
        padding: 6,
        borderRadius: 25,
        fontWeight: '600',
        fontSize: 16
    },
    total: {
        fontSize: 18,
        fontWeight: '600',
        color: 'white',
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
    },
    touchOpc: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
})
export default BasketIcon