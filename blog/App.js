import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IndexScreen from './src/screens/IndexScreen';
import { Provider as BlogProvider } from './src/context/BlogContext';
import ShowScreen from './src/screens/ShowScreen';

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
          <Stack.Screen 
            name="Show" 
            component={ShowScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </BlogProvider>
  );
}
