import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const SingleRide = () => {
    return (
        <View style={styles.container}>
            <View style={styles.time}>
                <Text style={styles.day}>Today</Text>
                <Text style={styles.timeString}>5:00 pm</Text>
                <Text>Seats: 3</Text>
            </View>
            <View style={styles.line}/>
            <View style={styles.location}>
                <Text>From: Madaraka Primary School</Text>
                <Text>To: Tom Mboya St., CBD</Text>
            </View>
            <View style={styles.estimate}>
                <Text>Est: 80</Text>
            </View>
        </View>
    )
}

export default SingleRide

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        padding:10,
        backgroundColor:'#fff'
    },
    time:{
        
    },
    line:{
        width:1,
  		height:55,
  		backgroundColor:'#919191',
        marginLeft:10
    },
    day:{
        fontSize:12
    },
    timeString:{
        fontWeight:'bold',
        fontSize:20
    }
})
