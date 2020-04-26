import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';

const ShowScreen = ({ route }) => {
    const { id } = route.params;
    const { state } = useContext(BlogContext);
    const blogPost = state.find((b) => b.id === id);
    return (
        <View>
            <Text>{blogPost.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

});

export default ShowScreen;