import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

class Novacheck extends React.Component {
  render() {
    return (
      <View >
        <Text style={styles.message}> Stupéfiants </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  message: {
    marginTop: "10px",
    marginBottom: "40px",
    fontSize: "20px",
    fontWeight: "bold",
    textAlign: "center",
  }
});

export default Novacheck;
