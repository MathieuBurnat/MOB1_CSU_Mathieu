import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

class Consultation extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Consultation </Text>

        <Button
          title="Consultation"
          onPress={() => this.props.navigation.navigate("consultation")}
        />
        <Button
          title="Stup"
          onPress={() => this.props.navigation.navigate("stup")}
        />
        <Button
          title="Garde"
          onPress={() => this.props.navigation.navigate("guard")}
        />
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

export default Consultation;
