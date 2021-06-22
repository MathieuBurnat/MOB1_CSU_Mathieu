import React from "react";

import { Text, StyleSheet, View, TextInput } from "react-native";
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
      item : this.props.item,
      arrayLength: 0,
      reasonEnabled: false,
      reason: "",
    };
    this.needToTalkSchedule = this.needToTalkSchedule.bind(this);
    this.saveSchedule = this.saveSchedule.bind(this);
    this.confirmworkplan = this.confirmworkplan.bind(this);
    this.setReason = this.setReason.bind(this);
    this.saveReason = this.saveReason.bind(this);
  }

  needToTalkSchedule(i) {
    console.log("We neek to talk.");

    this.setState({ reasonEnabled: true });

    //let item = {confirmation : 0};
    //this.confirmworkplan(item);
  }

  saveReason(){
    console.log("Reason saved");
    console.log(this.state.reason);
    console.log(this.state.item);
    
    //Confirmation 0 = I'm not OK
    let item = {id: this.state.item.id, confirmation: 0, reason: this.state.reason};
    console.log(item);
    this.confirmworkplan(item);
  }

  saveSchedule(i) {
    //Confirmation 1 = OK
    let item = { id: i.id, confirmation: 1, reason: "" };

    console.log(item);
    this.confirmworkplan(item);
  }

  confirmworkplan(item) {
    myApi.confirmworkplan(localStorage.getItem("token"), item).then(
      (res) => {
        showMessage({
          message: "Modification enregistrée",
          type: "success",
          duration: 1000,
        });
        console.log(res);
      },
      (error) => {
        showMessage({
          message:
            "Impossible de sauvegarder cette modification, veuillez ressayer plus tard. ",
          type: "danger",
          duration: 5000,
        });
      }
    );
  }

  setReason(reason) {
    this.setState({ reason });
  }

  render() {
    Moment.locale("fr");
    let date = Moment(this.props.item.date).format("Y MMM DD");

    let card = (
      <Card>
        <Text>Le {date}</Text>

        <Text style={styles.title}> {this.props.item.worktime.type} </Text>

        {this.state.reasonEnabled == false ? (
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
        ) : (
          <View>
            <Text> Ajouter une raison : </Text>
            <TextInput
              style={{ height: 40 }}
              placeholder="Ma raison"
              onChangeText={this.setReason}
              maxLength={50}
            />
            <Button title="Sauvegarder" onPress={this.saveReason} />
          </View>
        )}
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
