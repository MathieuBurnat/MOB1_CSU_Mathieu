import React from "react";
import { Text, Button, StyleSheet } from "react-native";
import { Card, Input } from "react-native-elements";
import myApi from "../../../API/api";
import Moment from "moment";

import ShiftsList from "../../../component/consultation/shifts/shiftsList";
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
    myApi.postPharmacheck(localStorage.getItem("token"), item).then((res) => {
      console.log(res);
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
    let date = Moment(this.props.item.date).format("Y-MMM-DD");

    // Create the card
    let card = (
      <Card>
        <Text> 
          <Text>Le {date}</Text> 
          <Text style={styles.batch}>
            Le<Text style={styles.bold}> {this.props.item.batch_number}  </Text>
          </Text> 
        </Text>
        <Text style={styles.title}> {this.props.item.drug} </Text>
        <Text style={styles.center}> [{this.props.item.batch_number}] </Text>
        <Text> Matin </Text>
        <Input placeholder={start} onChangeText={this.setStart} />
        <Text> Soir </Text>
        <Input
          placeholder={end}
          onChangeText={this.setEnd}
          keyboardType="numeric"
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
  },
  batch: {
    fontWeight: "bold",
    float: "right",
  },
  center: {
    textAlign: "center",
  }
});