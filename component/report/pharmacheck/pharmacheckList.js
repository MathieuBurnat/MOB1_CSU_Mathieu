import React from "react";
import myApi from "../../../API/api";

import { Text, StyleSheet } from "react-native";
import { Card, ListItem, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';

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
    myApi.getPharmachecks(localStorage.getItem("token"), localStorage.getItem("baseId")).then((res) => {
      this.setState({
        data: res.data.pharma,
      });
    });
  }

  renderItem({ item }) {
    let card = (
      <Card>
        <Text> {item.drug}  </Text>
        <Text> Le {item.date} </Text>
      </Card>
    );
    return card;
  }

  render() {
    return (
      <FlatList style={styles.items}
        data={this.state.data}
        renderItem={this.renderItem}
        keyExtractor={(item) => item.id}
      />
    );
  }
}

export default PharmacheckList;

const styles = StyleSheet.create({
  items: {
    width: "100%",
  },
});
