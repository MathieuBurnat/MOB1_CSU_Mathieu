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
    this.confirmworkplan = this.confirmworkplan.bind(this);
  }

  needToTalkSchedule(i){
    console.log("We neek to talk.");
    let item = {confirmation : 0};
    this.confirmworkplan(item);
  }

  saveSchedule(i){
    console.log("OK !");
    let item = {id: i.id, confirmation : 1, reason: ""};
    console.log(item);

    this.confirmworkplan(item);
  }

  confirmworkplan(item){
    myApi.confirmworkplan(localStorage.getItem("token"), item).then((res) => {
        showMessage({
          message: "Modification enregistrée",
          type: "success",
          duration: 1000,
        });
        console.log(res);
      }, (error) => {
        showMessage({
          message: "Impossible de sauvegarder cette modification, veuillez ressayer plus tard. ",
          type: "danger",
          duration: 5000,
        });
      });
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
            onPress={() => this.needToTalkSchedule(this.props.item)}
            size={20}
          />

          <Icon
            style={styles.checkIcon}
            name={"check"}
            onPress={() => this.saveSchedule(this.props.item)}
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
