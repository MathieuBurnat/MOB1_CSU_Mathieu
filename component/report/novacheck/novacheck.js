import React from "react";
import { Text, Button, StyleSheet } from "react-native";
import { Card } from "react-native-elements";
import myApi from "../../../API/api";
import Moment from "moment";

import InputSpinner from "react-native-input-spinner";
import { showMessage } from "react-native-flash-message";

class Novacheck extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: 0,
      end: 0,
    };

    this.saveNovacheck = this.saveNovacheck.bind(this);
    this.setEnd = this.setEnd.bind(this);
    this.setStart = this.setStart.bind(this);
  }

  saveNovacheck(item) {
    item.end = this.state.end;
    item.start = this.state.start;
    myApi.postNovacheck(localStorage.getItem("token"), item).then((res) => {
      showMessage({
        message: "Nova sauvegardée  ",
        type: "success",
        duration: 1000,
      });
      console.log(res);
    }, (error) => {
      showMessage({
        message: "Impossible de sauvegarder ma nova, ressayez plus tard. ",
        type: "danger",
        duration: 6000,
      });
    });
  }

  setEnd(end) {
    this.setState({ end });
  }

  setStart(start) {
    this.setState({ start });
  }

  render() {
    // If the start or end of the item is null
    // -> Put 0 as default value
    let start = this.props.item.start ?? 0;
    let end = this.props.item.end ?? 0;
    Moment.locale("fr");
    let date = Moment(this.props.item.date).format("Y MMM DD");

    // Create the card
    let card = (
      <Card>
        <Text>
          Le {date}
          <Text style={styles.right}> Nova : <Text style={styles.nova}>{this.props.item.nova}</Text></Text>
        </Text>

        <Text style={styles.title}> {this.props.item.drug} </Text>
        <Text style={styles.day}> Matin </Text>
        <InputSpinner
          min={0}
          value={start}
          skin="clean"
          style={styles.inputSpinner}
          onChange={this.setStart}
        />

        <Text style={styles.day}> Soir </Text>
        <InputSpinner
          min={0}
          value={end}
          skin="clean"
          style={styles.inputSpinner}
          onChange={this.setEnd}
        />
        <Button
          title="Sauvegarder"
          onPress={() => this.saveNovacheck(this.props.item)}
        />
      </Card>
    );
    return card;
  }
}

export default Novacheck;

const styles = StyleSheet.create({
  title: {
    fontSize: "20px",
    textAlign: "center",
    fontWeight: "bold",
    marginTop: "13px",
  },
  nova: {
    fontWeight: "bold",
  },
  right: {
    float: "right",
  },
  inputSpinner: {
    width: "50%",
    alignSelf: "center",
    marginTop: "5px",
    marginBottom: "15px",
  },
  day: {
    textAlign: "center",
    marginTop: "10px"
  }
});