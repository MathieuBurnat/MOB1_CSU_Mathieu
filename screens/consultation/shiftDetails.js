import React from "react";

import { StyleSheet, Text, View, Button } from "react-native";
import ActionsList from "../../component/consultation/actionsList";
class ShiftDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  render() {
    return (
      <View style={styles.container}>

        <Text> Détails de la journée à : {this.props.route.params.item.base}</Text>
        <Text> Le : {this.props.route.params.item.date}</Text>
        <ActionsList item={this.props.route.params.item}> </ActionsList>

      </View>

    );
  }
}
export default ShiftDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});