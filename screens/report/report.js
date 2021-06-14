import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

class Report extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Homepage"
          onPress={() => this.props.navigation.navigate("homepage")}
        />

        <Text> Faire un </Text>


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

export default Report;
