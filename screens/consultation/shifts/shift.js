import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import ShiftsList from "../../../component/consultation/shifts/shiftsList";
class Shift extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <Text> Garde(s) </Text>
        
        <Button
          title="Consultation"
          onPress={() => this.props.navigation.navigate("consultation")}
        />
        <ShiftsList navigation={this.props.navigation}> </ShiftsList>

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

export default Shift;
