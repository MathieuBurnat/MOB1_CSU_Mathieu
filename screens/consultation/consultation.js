import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

class Consultation extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.message}> Consulter mes rapports </Text>

        <Button
          title="Garde"
          onPress={() => this.props.navigation.navigate("shifts")}
        />
        
        <Button
          title="Stup"
          onPress={() => this.props.navigation.navigate("stup")}
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
  },
});

export default Consultation;
