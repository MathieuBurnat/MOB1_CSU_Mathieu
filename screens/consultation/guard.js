import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import GuardTours from "../../component/consultation/guardTours";
class Guard extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <Text> Garde(s) </Text>
        
        <Button
          title="Consultation"
          onPress={() => this.props.navigation.navigate("consultation")}
        />
        <Button
          title="Homepage"
          onPress={() => this.props.navigation.navigate("homepage")}
        />

        <GuardTours> </GuardTours>

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

export default Guard;
