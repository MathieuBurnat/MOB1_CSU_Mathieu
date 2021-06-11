import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

class Rapport extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Rapport </Text>

        <Button
          title="Homepage"
          onPress={() => this.props.navigation.navigate("homepage")}
        />
        <Button
          title="novacheck"
          onPress={() => this.props.navigation.navigate("novacheck")}
        />
        <Button
          title="pharmacheck"
          onPress={() => this.props.navigation.navigate("pharmacheck")}
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

export default Rapport;
