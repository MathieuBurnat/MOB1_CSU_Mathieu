import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

class Stup extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Stup </Text>

        <Button
          title="Homepage"
          onPress={() => this.props.navigation.navigate("homepage")}
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

export default Stup;
