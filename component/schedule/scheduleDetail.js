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
    this.needToTalkSchedule = this.needToTalkSchedule.bind(this);
    this.saveSchedule = this.saveSchedule.bind(this);

  }

  needToTalkSchedule(){
    console.log("We neek to talk.");
  }

  saveSchedule(){
    console.log("OK !");
  }

  render() {
    Moment.locale("fr");
    let date = Moment(this.props.item.date).format("Y MMM DD");

    let card = (
      <Card>
        <Text>Le {date}</Text>

        <Text style={styles.title}> {this.props.item.worktime.type} </Text>

        <span>
          <Icon
            style={styles.timesIcon}
            name={"times"}
            onPress={() => this.needToTalkSchedule()}
            size={20}
          />

          <Icon
            style={styles.checkIcon}
            name={"check"}
            onPress={() => this.saveSchedule()}
            size={20}
          />
        </span>
      </Card>
    );
    return card;
  }
}

export default ScheduleDetail;

const styles = StyleSheet.create({
  title: {
    fontSize: "20px",
    textAlign: "center",
    fontWeight: "bold",
    marginTop: "13px",
    marginBottom: "15px",
  },
  checkIcon: {
    color: "green",
    float: "right",
  },
  timesIcon: {
    color: "red",
  },
});
