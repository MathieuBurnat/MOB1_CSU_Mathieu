import React from "react";
import { Text, Button, StyleSheet } from "react-native";
import { Card } from "react-native-elements";
import myApi from "../../../API/api";
import Moment from "moment";
import { showMessage } from "react-native-flash-message";

import InputSpinner from "react-native-input-spinner";

class Pharmacheck extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: 0,
      end: 0,
    };

    this.savePharmacheck = this.savePharmacheck.bind(this);
    this.setEnd = this.setEnd.bind(this);
    this.setStart = this.setStart.bind(this);
  }

  savePharmacheck(item) {
    item.end = this.state.end;
    item.start = this.state.start;
    myApi.postPharmacheck(localStorage.getItem("token"), item).then((res) => {
      console.log(res);
      showMessage({
        message: "Pharma sauvegardée ! ",
        type: "success",
        duration: 1000,
      });
    }, (error) => {
      showMessage({
        message: "Impossible de sauvegarder ma pharma, ressayez plus tard. ",
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
          <Text style={styles.right}> Lot : <Text style={styles.batch}>{this.props.item.batch_number}</Text></Text>
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
          onPress={() => this.savePharmacheck(this.props.item)}
        />
      </Card>
    );
    return card;
  }
}

export default Pharmacheck;

const styles = StyleSheet.create({
  title: {
    fontSize: "20px",
    textAlign: "center",
    fontWeight: "bold",
    marginTop: "13px",
  },
  batch: {
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