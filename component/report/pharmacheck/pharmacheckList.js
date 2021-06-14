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

  renderItem({ item }) {
    let card = (
      <Card>
        <Text> {item.drug} </Text>
        <Text> Le {item.date} </Text>
        <Text> Le {item.date} </Text>
        <Text> {item.start} puis {item.end}</Text>
        <Input placeholder="0" />
        <Input placeholder="1" />
        <NumericInput type='up-down' onChange={value => console.log(value)} />

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
