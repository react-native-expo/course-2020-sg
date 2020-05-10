import React, { useEffect, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { useAuth } from '../contexts/AuthContext';



const SignupScreen = () => {
    const navigation = useNavigation();
    
    const { state, signUp, clearErrorMessage } = useAuth();
    
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
            headerText="Sign Up for Tracker"
            errorMessage={state.errorMessage || ''}
            submitButtonText="Sign Up"
            onSubmit={(data) => signUp && signUp(data)}
          />
          <NavLink
            routeName="Signin"
            text="Already have an account? Sign in instead!"
          />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250
    }
});

export default SignupScreen;