import React from "react";

import { Text, StyleSheet, View } from "react-native";
import { Card, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { FlatList } from "react-native-gesture-handler";
import Moment from "moment";
import { showMessage } from "react-native-flash-message";
import myApi from "../../API/api";

class ScheduleDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayLength: 0,
    };
  }


  render() {
    let card = (
        <Card>
          <Text> ** Titre ** </Text>
          <Text> [Jour : {this.props.item.date} à {this.props.item.at}] </Text>
          <Text> - {this.props.item.at}- </Text>
        </Card>
      );
      return card;
  }
}

export default ScheduleDetail;

const styles = StyleSheet.create({
  button: {},
});
