import React from "react";
import myApi from "../../../API/api";

import { Text, StyleSheet } from "react-native";
import { Card, ListItem, Button, View, Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import NumericInput from 'react-native-numeric-input'

import { FlatList } from "react-native-gesture-handler";

class PharmacheckList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };

    this.renderItem = this.renderItem.bind(this);
    this.savePharmacheck = this.savePharmacheck.bind(this);
  }

  componentDidMount() {
    myApi
      .getPharmachecks(
        localStorage.getItem("token"),
        localStorage.getItem("baseId")
      )
      .then((res) => {
        this.setState({
          data: res.data.pharma,
        });
      });
  }

  savePharmacheck(id){
    console.log("What's my ID ? ", id);
  }

  renderItem({ item }) {
    let start = item.start ?? 0;
    let end = item.end ?? 0;

    let card = (
      <Card>
        <Text> {item.drug} </Text>
        <Text> Le {item.date} </Text>
        <Text> Matin </Text>
        <Input placeholder={start} />

        <Text> Soir </Text>
        <Input placeholder={end}/>
        <Button
          title="Sauvegarder"
          onPress={() => this.savePharmacheck(item.id)}
        />      
      </Card>
    );
    return card;
  }

  render() {
    return this.state.data.length != 0 ? (
      <FlatList
        style={styles.items}
        data={this.state.data}
        renderItem={this.renderItem}
        keyExtractor={(item) => item.id}
      />
    ) : (
      <Text>Aucuns Pharmacheck sont disponible.</Text>
    );
  }
}

export default PharmacheckList;

const styles = StyleSheet.create({
  items: {
    width: "100%",
  },
});
