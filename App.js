import React from 'react';
import type {Node} from 'react';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home'
import LocationSearch from './screens/LocationSearch'
import SearchResult from './screens/SearchResult'

const Stack = createStackNavigator()

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' options={{headerShown:false}} component={Home} />
        <Stack.Screen name='LocationSearch' options={{headerShown:false}} component={LocationSearch} />
        <Stack.Screen name='SearchResult' options={{headerShown:false}} component={SearchResult} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
