import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import NovacheckList from '../../component/report/novacheck/novacheckList'
class Novacheck extends React.Component {
  render() {
    return (
      <View >
        <NovacheckList navigation={this.props.navigation}> </NovacheckList>
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

export default Novacheck;
