import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';

const CreateScreen = () => {
    const { state } = useContext(BlogContext);
    return (
        <View>
            <Text>Create</Text>
        </View>
    )
}

const styles = StyleSheet.create({

});

export default CreateScreen;