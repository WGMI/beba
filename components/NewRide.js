import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import SingleRide from './New/SingleRide'
import types from '../assets/types'

const NewRide = () => {
    return (
        <View>
            {types.map(
                type => <SingleRide
                    key={type.id}
                    type={type.type}
                    image={type.image}
                    duration={type.duration}
                    price={type.price}
                    capacity={type.capacity}
                />
                )}
        </View>
    )
}

export default NewRide

const styles = StyleSheet.create({})
