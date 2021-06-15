import React from "react";
import myApi from "../../../API/api";

import { Text, StyleSheet } from "react-native";
import { Card, ListItem, Button, View, Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import NumericInput from "react-native-numeric-input";

import { FlatList } from "react-native-gesture-handler";

class PharmacheckList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      basename: "",
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
        this.setState({ basename: localStorage.getItem("baseName") });
      });
  }

  savePharmacheck(item) {
    console.log("Save item.. ");
    console.log(item);
    console.log("Token : " + localStorage.getItem("token"));

    myApi.postPharmacheck(localStorage.getItem("token"), item).then((res) => {
      console.log(res);
    });
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
        <Input placeholder={end} />
        <Button
          title="Sauvegarder"
          onPress={() => this.savePharmacheck(item)}
        />
      </Card>
    );
    return card;
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
