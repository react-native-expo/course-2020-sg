import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import AuthProvider from './src/contexts/AuthContext';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';
import { navigationRef } from './src/RootNavigation';

const loginFlow = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      headerMode="none"
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
    <AuthProvider>
      <NavigationContainer ref={navigationRef}>
        <RootStack.Navigator headerMode="none">
          <RootStack.Screen name="ResolveAuth" component={ResolveAuthScreen} />
          <RootStack.Screen name="loginFlow" component={loginFlow} />
          <RootStack.Screen name="mainFlow" component={mainFlow} />
        </RootStack.Navigator>  
      </NavigationContainer>
    </AuthProvider>
  )
}
