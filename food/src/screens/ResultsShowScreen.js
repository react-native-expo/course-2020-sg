import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ route }) => {
    
    const [result, setResult] = useState(null);
    const id = route.params?.id ?? '';

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    useEffect(() => {
        getResult(id);
    }, []); // call only one time when component created

    if (!result) {
        return null;
    }

    return (
        <>
            <Text>{result.name}</Text>
            <FlatList 
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({item}) => {
                    return <Image style={styles.image} source={{ uri: item }} />
                }}
            />
        </>
    )
};

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300
    }
});

export default ResultsShowScreen;