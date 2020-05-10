import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useAuth } from '../contexts/AuthContext';

const AccountScreen = () => {
    const { signOut } = useAuth();
    return (
        <View>
            <Text>AccountScreen</Text>
            <Button title='Signout' onPress={() => signOut && signOut()} />
        </View>
    )
};

const styles = StyleSheet.create({

});

export default AccountScreen;