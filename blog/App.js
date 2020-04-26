import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IndexScreen from './src/screens/IndexScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Index"
        screenOptions= {{
          title: 'Blogs',
          cardStyle: {
            backgroundColor: 'white'
          }
        }}
      >
        <Stack.Screen 
          name="Index" 
          component={IndexScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
