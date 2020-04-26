import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ResultsShowScreen = ({ route }) => {
    const id = route.params?.id ?? '';
    console.log(id);
    return (
        <>
            <Text>Result</Text>
        </>
    )
};

const styles = StyleSheet.create({
});

export default ResultsShowScreen;