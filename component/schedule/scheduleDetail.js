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
      item: this.props.item,
      arrayLength: 0,
      reasonEnabled: false,
      reason: "",
      status: "inconnu",
      statusCode: 0, /* 0 : Unknoe, 1 : Confirmed, 2 : In Discution*/
    };
    this.needToTalkSchedule = this.needToTalkSchedule.bind(this);
    this.saveSchedule = this.saveSchedule.bind(this);
    this.confirmworkplan = this.confirmworkplan.bind(this);
    this.setReason = this.setReason.bind(this);
    this.saveReason = this.saveReason.bind(this);
  }

  needToTalkSchedule() {
    this.setState({ reasonEnabled: true });
  }

  saveReason() {
    //Confirmation 0 = I'm not OK
    let item = {
      id: this.state.item.id,
      confirmation: 0,
      reason: this.state.reason,
    };
    this.confirmworkplan(item);
    this.setState({status : "En Discussion", statusCode: 2})
  }

  saveSchedule() {
    //Confirmation 1 = OK
    let item = { id: this.state.item.id, confirmation: 1, reason: "" };
    this.confirmworkplan(item);
    this.setState({status : "Confirmé", statusCode: 1})
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
        <Text>
          Le {date}
          <Text style={styles.right}> Status : {this.state.status}</Text>
        </Text>

        <Text style={styles.title}> {this.props.item.worktime.type} </Text>

        {this.state.reasonEnabled == false ? (
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
        ) : (
          <View>
            <Text> Ajouter une raison : </Text>
            <TextInput
              style={{ height: 40 }}
              placeholder="Ma raison"
              onChangeText={this.setReason}
              maxLength={50}
            />
            {/* If the reason has not 10 chars as minimum. It's impossible to save the button*/}
            {this.state.reason.length < 10 ? (
              <Text> Votre raison doit faire plus de <Text style={styles.bold}>10 charcatères</Text> avant d'être pouvoir enregistrée. </Text>
            ) : (
              <Button title="Sauvegarder" onPress={this.saveReason} />
            )}
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
  bold :{
    fontWeight: "bold",
  },
  right :{
    float: "right",
  },
});
