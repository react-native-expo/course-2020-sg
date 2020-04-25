import React from "react";
import { Text, StyleSheet, View } from "react-native";

const BoxScreen = () => {

    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>Box</Text>
        </View>
    );
};

const styles = StyleSheet.create({
  viewStyle: {
      borderWidth: 3,
      borderColor: 'black'
  },
  textStyle: {
      borderWidth: 10,
      borderColor: 'red',
      margin: 20
  }
});

export default BoxScreen;
