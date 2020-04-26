import React, { useContext, useLayoutEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
import { EvilIcons } from '@expo/vector-icons';

const ShowScreen = ({ route, navigation }) => {
    const { id } = route.params;
    const { state } = useContext(BlogContext);
    const blogPost = state.find((b) => b.id === id);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('Edit')}>
                    <EvilIcons name='pencil' size={35} />
                </TouchableOpacity>
            )
        });
    }, [navigation]);
    
    return (
        <View>
            <Text>{blogPost.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

});

export default ShowScreen;