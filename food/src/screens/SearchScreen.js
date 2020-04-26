import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = ({ navigation }) => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        // price === '$' || '$$' || '$$$'
        return results.filter(result => {
            return result.price === price;
        });
    };

    return (
        <>
            <SearchBar
                term={term}
                // onTermChange={newTerm => setTerm(newTerm)}
                // onTermSubmit={() => searchApi}
                onTermChange={setTerm}
                onTermSubmit={searchApi}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultsList 
                    title="Cost Effective" 
                    results={filterResultsByPrice('$')} 
                    navigation={navigation}
                />
                <ResultsList 
                    title="Bit Pricier" 
                    results={filterResultsByPrice('$$')} 
                    navigation={navigation}
                />
                <ResultsList 
                    title="Big Spender" 
                    results={filterResultsByPrice('$$$')} 
                    navigation={navigation}
                />
            </ScrollView>

        </>
    )
};

const styles = StyleSheet.create({
});

export default SearchScreen;