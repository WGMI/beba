import React, {useEffect} from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';
import MapboxGL from "@react-native-mapbox-gl/maps"
import styles from './mapstyles'

const Home = ({navigation}) => {

    MapboxGL.setAccessToken("pk.eyJ1Ijoid2dtaW1vIiwiYSI6ImNrcXc2YjNxMTA2NXAydnBsNXNzcWU3Y28ifQ.EWgaZPQvI9Rs63j4s0MvLw");
    MapboxGL.setConnected(true);

    const locationSearch = () => {
        navigation.navigate('LocationSearch')
    }
    
    return (
        <View style={styles.page}>
            <View style={styles.container}>
                <MapboxGL.MapView style={styles.map}>
                    <MapboxGL.UserLocation/>
                    <MapboxGL.Camera
                        zoomLevel={13}
                        centerCoordinate={[36.8151148,-1.3124514]}
                    >
                    </MapboxGL.Camera>
                </MapboxGL.MapView>
            </View>
            <View style={styles.whereTo}>
                <TouchableOpacity onPress={locationSearch} style={styles.input}><Text>Pickup</Text></TouchableOpacity>
                <TouchableOpacity onPress={locationSearch} style={styles.input}><Text>Where To?</Text></TouchableOpacity>
                {/* <TextInput editable={false} placeholder='Pickup' style={styles.input} onFocus={locationSearch}/>
                <TextInput editable={false} placeholder='Where To?' style={styles.input}/> */}
            </View>
        </View>
    )
}

export default Home