import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'

const LocationSearch = ({navigation}) => {

    const [pickup,setPickup] = useState('')
    const [destination,setDestination] = useState('')

    const confirm = () => {
        navigation.navigate('SearchResult')
    }

    // useEffect(() => {
    //     if(pickup && destination){
    //         console.log(12345)
    //     }else{
    //         console.log(98765)

    //     }
    // },[pickup,destination])

    return (
        <View style={{padding:20}}>
            <View style={styles.inputContainer}>
                <TextInput placeholder='Pickup' style={styles.input} onChange={(text) => {setPickup(text)}}/>
                <TextInput placeholder='Destination' style={styles.input} onChange={(text) => {setDestination(text)}}/>
                <Button title='Confirm Destination' onPress={confirm}/>
            </View>
        </View>
    )
}

export default LocationSearch

const styles = StyleSheet.create({
    inputContainer:{
        width: '100%', 
        justifyContent: 'center', 
        //height: '20%', 
        //alignItems: 'center',
    },
    input:{
        padding:12,
        marginBottom:10,
        backgroundColor: '#e3e3e3', 
        borderRadius:10
    }
})
