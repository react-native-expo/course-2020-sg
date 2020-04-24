import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const ColorScreen = ({navigation}) => {
  return (
    <View>
        <Button title="Add a Color"></Button>

        <View style={{height: 100, width: 100, backgroundColor: randomRgb()}}></View>
    </View>
  );
};

const randomRgb = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
}

const styles = StyleSheet.create({});

export default ColorScreen;
