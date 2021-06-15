import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

class Info extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Obiwan kenobi ?!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Info;
