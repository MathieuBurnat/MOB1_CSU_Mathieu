import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import ShiftsList from "../../../component/consultation/shifts/shiftsList";
class Shift extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.message}> Jours de garde </Text>
        <ShiftsList navigation={this.props.navigation}> </ShiftsList>
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

export default Shift;
