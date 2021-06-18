import React from "react";
import myApi from "../../../API/api";

import { Text, StyleSheet } from "react-native";
import { Card, ListItem, Button, View, Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import NumericInput from "react-native-numeric-input";

import { FlatList } from "react-native-gesture-handler";
import Pharmacheck from "./pharmacheck.js"
import { showMessage } from "react-native-flash-message";

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
      .getMissingchecks(
        localStorage.getItem("token"),
        localStorage.getItem("baseId")
      )
      .then((res) => {
        this.setState({
          data: res.data.pharma,
        });
        this.setState({ basename: localStorage.getItem("baseName") });
      }, (error) => {
        showMessage({
          message: "Impossible de charger les Pharmas. ",
          type: "danger",
          duration: 6000,
        });
      });
  }

  renderItem({ item }) {
    //Create a new Pharmacheck with the given item
    return <Pharmacheck item={item}/>;
  }

  render() {
    return (
      <div>
        <Text style={styles.message}> <Text style={styles.initials}> {this.state.basename} </Text> </Text>
        {this.state.data != null && this.state.data.length != 0 ? (
          <FlatList
            data={this.state.data}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        ) : (
          <Text style={styles.error}> Aucun Pharmacheck n'est disponible. </Text>
        )}
      </div>
    );
  }
}

export default PharmacheckList;

const styles = StyleSheet.create({
  message: {
    marginTop: "10px",
    marginBottom: "40px",
    fontSize: "20px",
    fontWeight: "bold",
  },
  error: {
    marginTop: "50px",
    marginBottom: "40px",
    fontSize: "15px",
    fontWeight: "bold",
    textAligh: "center",
  },
  initials :{
    color: "#009688",
    float: "right",
  }
});
