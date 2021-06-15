import React from "react";

import { StyleSheet, Text, View, Button } from "react-native";
import ActionsList from "../../../component/consultation/shifts/actionsList";
class ShiftDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  render() {
    return (
      <View>
        <Text style={styles.date}> Le <Text style={styles.bold}> {this.props.route.params.item.date} </Text></Text>
        <Text style={styles.message}> <Text style={styles.special}> {this.props.route.params.item.base} </Text></Text>
        <ActionsList item={this.props.route.params.item}> </ActionsList>
      </View>

    );
  }
}
export default ShiftDetail;

const styles = StyleSheet.create({
  message:{
    marginTop: "10px",
    marginBottom: "10px",
    fontSize: "20px",
    fontWeight: "bold",
    textAlign: "center",
  },
  special :{
    color: "#009688",
  },
  bold :{
    fontWeight: "bold",
  },  
  date: {
    marginTop: "2px",
    marginRight: "5px",
    textAlign : "right"
  }
});