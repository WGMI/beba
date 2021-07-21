import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const SingleRide = ({type,image,duration,price,capacity}) => {

    const getImage = (type) => {
        if(type == 'UberX'){
            return require('../assets/images/UberX.jpeg')
        }

        if(type == 'Comfort'){
            return require('../assets/images/Comfort.jpeg')
        }

        return require('../assets/images/UberXL.jpeg')
    }

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={getImage(type)}/>
            <View style={styles.type}>
                <Text style={{fontWeight:'bold'}}>{type}</Text>
                <Text>{duration} min away</Text>
            </View>
            <View style={styles.capacity}>
                <Text style={{fontWeight:'bold',fontSize:10}}>Capacity</Text>
                <Text>{capacity}</Text>
            </View>
            <View style={styles.priceContainer}>
                <Text>{price}</Text>
            </View>
        </View>
    )
}

export default SingleRide

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        height:80,
        margin:5,
        padding:10,
        backgroundColor:'#fff',
        justifyContent:'space-evenly'
    },
    image:{
        height:70,
		width:80,
		resizeMode:'contain'
    },
    type:{
        // marginLeft:20,
        // marginRight:20,
    },
    capacity:{
        // marginLeft:20,
        // marginRight:20,
        alignItems:'center'
    },
    priceContainer:{
        // marginLeft:20,
    }
})
