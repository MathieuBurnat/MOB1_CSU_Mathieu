import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

class Consultation extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Voir mes rapports de </Text>

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
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Consultation;
