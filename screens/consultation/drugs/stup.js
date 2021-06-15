import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

class Pharmacheck extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.message}> Pharmacheck </Text>
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
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Pharmacheck;
