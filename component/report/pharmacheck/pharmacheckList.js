import React from "react";
import myApi from "../../../API/api";

import { Text, StyleSheet } from "react-native";
import { Card, ListItem, Button, View, Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import NumericInput from "react-native-numeric-input";

import { FlatList } from "react-native-gesture-handler";
import Pharmacheck from "./pharmacheck.js"

class PharmacheckList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      basename: "",
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
        this.setState({ basename: localStorage.getItem("baseName") });
      });
  }

  renderItem({ item }) {
    return <Pharmacheck item={item}/>;
  }

  render() {
    return (
      <div>
        <Text> {this.state.basename} </Text>
        {this.state.data != null && this.state.data.length != 0 ? (
          <FlatList
            style={styles.items}
            data={this.state.data}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        ) : (
          <Text>Aucuns Pharmacheck sont disponible.</Text>
        )}
        ;
      </div>
    );
  }
}

export default PharmacheckList;

const styles = StyleSheet.create({
  items: {
    width: "100%",
  },
});
