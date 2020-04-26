import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IndexScreen from './src/screens/IndexScreen';
import { BlogProvider } from './src/context/BlogContext';

const Stack = createStackNavigator();

export default function App() {
  return (
    <BlogProvider>
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
    </BlogProvider>
  );
}
