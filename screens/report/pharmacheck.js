import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import PharmacheckList from '../../component/report/pharmacheck/pharmacheckList'
class Pharmacheck extends React.Component {
  render() {
    return (
      <View >
        <PharmacheckList navigation={this.props.navigation}> </PharmacheckList>
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
  }
});

export default Pharmacheck;
