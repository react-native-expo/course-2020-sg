import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';



const SignupScreen = () => {
    const navigation = useNavigation();
    
    return (
        <View>
            <Text>SignupScreen</Text>
            <Button title='Go to Sign In' onPress={()=> navigation.navigate('Signin') } />
            <Button title='Go to Main flow' onPress={()=> navigation.navigate('mainFlow') } />
            <Button title='Go to Main flow - Screen Account' onPress={()=> navigation.navigate('mainFlow', { screen: 'Account' }) } />
        </View>
    )
};

const styles = StyleSheet.create({

});

export default SignupScreen;