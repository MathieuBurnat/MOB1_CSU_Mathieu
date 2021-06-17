import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

class Report extends React.Component {
  render() {
    return (
      <View >
        <Text style={styles.message}> Créer un rapport </Text>

        <Button
          title="pharmacheck"
          onPress={() => this.props.navigation.navigate("pharmacheck")}
        />

        <Button
          title="novacheck"
          onPress={() => this.props.navigation.navigate("novacheck")}
        />
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

export default Report;
