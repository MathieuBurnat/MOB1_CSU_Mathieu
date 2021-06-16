import React from "react";
import { Text, Button } from "react-native";
import { Card, Input } from "react-native-elements";
import myApi from "../../../API/api";

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

    // Create the card
    let card = (
      <Card>
        <Text> {this.props.item.drug} </Text>
        <Text> Le {this.props.item.date} </Text>
        <Text> Lot : {this.props.item.batch_number} </Text>
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
