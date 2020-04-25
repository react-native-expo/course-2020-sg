import React from "react";
import { Text, StyleSheet, View } from "react-native";

const BoxScreen = () => {

    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textOneStyle}>Child #1</Text>
            <Text style={styles.textTwoStyle}>Child #2</Text>
            <Text style={styles.textThreeStyle}>Child #3</Text>
        </View>
    );
};

const styles = StyleSheet.create({
  viewStyle: {
      borderWidth: 3,
      borderColor: 'black',
      height: 200,
  },
  textOneStyle: {
      borderWidth: 3,
      borderColor: 'red',
      flex: 4 // 4 + 4 + 2 = 10 => 40% 
  },
  textTwoStyle: {
      borderWidth: 3,
      borderColor: 'red',
      flex: 4 // 4 + 4 + 2 = 10 => 40%
  },
  textThreeStyle: {
      borderWidth: 3,
      borderColor: 'red',
      flex: 2 // 4 + 4 + 2 = 10 => 20%
  }
});

export default BoxScreen;
