import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Search"
        screenOptions= {{
          title: 'BusinessSearch',
          cardStyle: {
            backgroundColor: 'white'
          }
        }}
      >
        <Stack.Screen 
          name="Search" 
          component={SearchScreen}
        />
        <Stack.Screen 
          name="ResultsShow" 
          component={ResultsShowScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
