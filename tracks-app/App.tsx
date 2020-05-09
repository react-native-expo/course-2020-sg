import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, Text, View } from 'react-native';
import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';

const loginFlow = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: ''
      }}
    >
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Signin" component={SigninScreen} />
    </Stack.Navigator>
  );
}

const mainFlow = () => {
  const Tab = createBottomTabNavigator();

  const trackListFlow = () => {
    const Stack = createStackNavigator();
    return (
      <Stack.Navigator
        // headerMode="none"
        screenOptions={{
          headerTitle: ''
        }}
      >
        <Stack.Screen name="TrackList" component={TrackListScreen} />
        <Stack.Screen name="TrackDetail" component={TrackDetailScreen} />
      </Stack.Navigator>
    );
  }

  return (
    <Tab.Navigator>
      <Tab.Screen name="trackListFlow" component={trackListFlow} />
      <Tab.Screen name="TrackCreate" component={TrackCreateScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
}

const RootStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator headerMode="none">
        <RootStack.Screen name="loginFlow" component={loginFlow} />
        <RootStack.Screen name="mainFlow" component={mainFlow} />
      </RootStack.Navigator>  
    </NavigationContainer>
  )
}
