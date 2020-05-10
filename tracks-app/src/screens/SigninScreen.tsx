import React, { useContext, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../contexts/AuthContext';

const SigninScreen = () => {
    const navigation = useNavigation();
    
    const { state, signIn, clearErrorMessage } = useAuth();
    
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            // Screen was focused
            clearErrorMessage
        });

        return unsubscribe;
    }, [navigation]);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign In to Your Account"
        errorMessage={state.errorMessage || ''}
        onSubmit={(data) => signIn && signIn(data)}
        submitButtonText="Sign In"
      />
      <NavLink
        text="Dont have an account? Sign up instead"
        routeName="Signup"
      />
    </View>
  );
};

SigninScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250
  }
});

export default SigninScreen;
