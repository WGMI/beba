import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import NewRide from '../components/NewRide'
import JoinRide from '../components/JoinRide'

const Tab = createBottomTabNavigator()

const SearchResult = () => {
    return (
        <NavigationContainer independent={true}>
            <Tab.Navigator>
                <Tab.Screen name="New Ride" component={NewRide} />
                <Tab.Screen name="Join Ride" component={JoinRide} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default SearchResult


