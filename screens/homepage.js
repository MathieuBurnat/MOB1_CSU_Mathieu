import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

class Homepage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Welcome </Text>
        <Button
          title="Se connecter"
          onPress={() => this.props.navigation.navigate("login")}
        />
        <Button
          title="Info"
          onPress={() => this.props.navigation.navigate("info")}
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

export default Homepage;
