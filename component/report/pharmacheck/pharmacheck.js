import React from "react";
import { Text, Button } from "react-native";
import { Card, Input } from "react-native-elements";
import myApi from "../../../API/api";
 
import ShiftsList from "../../../component/consultation/shifts/shiftsList";
class Pharmacheck extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };

    this.savePharmacheck = this.savePharmacheck.bind(this);
  }

  savePharmacheck(item) {
    console.log("Save item.. ");
    console.log(item);
    console.log("Token : " + localStorage.getItem("token"));

    myApi.postPharmacheck(localStorage.getItem("token"), item).then((res) => {
      console.log(res);
    });
  }

  render() {
    let start = this.props.item.start ?? 0;
    let end = this.props.item.end ?? 0;

    let card = (
      <Card>
        <Text> {this.props.item.drug} </Text>
        <Text> Le {this.props.item.date} </Text>
        <Text> Matin </Text>
        <Input placeholder={start} />

        <Text> Soir </Text>
        <Input placeholder={end} />
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
