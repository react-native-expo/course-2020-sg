import React, { useState, useReducer } from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const reducer = (state, action) => {
    // state === { counter }
    // action === { type: 'increase' || 'decrease' , payload: number }

    const { type, payload } = action
    switch (type) {
        case 'increase':
            return { ...state, counter: state.counter + payload}
        case 'decrease':
            return { ...state, counter: state.counter - payload}
        default:
            return state;
    }
}

const CounterScreen = () => {

    const [state, dispatch] = useReducer(reducer, { counter: 0});
    const { counter } = state;

    return (
        <View>
            <Button title="Increase" onPress={() => dispatch({type: 'increase', payload: 1})}></Button>
            <Button title="Decrease" onPress={() => dispatch({type: 'decrease', payload: 1})}></Button>
            <Text>Current Count: {counter}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
  
});

export default CounterScreen;
