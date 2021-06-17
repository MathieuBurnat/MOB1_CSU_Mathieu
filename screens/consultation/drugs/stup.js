import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import DrugsList from "../../../component/consultation/drugs/drugsList";
class Stup extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.message}> Pharmacheck </Text>
        <DrugsList navigation={this.props.navigation}> </DrugsList>
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

export default Stup;
