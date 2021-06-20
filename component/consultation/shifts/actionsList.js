import React from "react";
import myApi from "../../../API/api";

import { Text, StyleSheet, View } from "react-native";
import { Card } from 'react-native-elements'
import { showMessage } from "react-native-flash-message";

import { FlatList } from "react-native-gesture-handler";

class ActionsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };

    this.renderItem = this.renderItem.bind(this);
  }

  componentDidMount() {
    myApi.getMyactionsInShift(localStorage.getItem("token"), this.props.item.id).then((res) => {
      this.setState({
        data: res.data.data,
      });
    }, (error) => {
      showMessage({
        message: "Impossible de charger mes actions. ",
        type: "danger",
        duration: 6000,
      });
    });
  }

  renderItem({ item }) {
    let card = (
      <Card>
        <Text> [Jour : {item.day} à {item.at}] </Text>
        <Text> - {item.action}- </Text>
      </Card>
    );
    return card;
  }

  render() {
    return (
      <View>
        {this.state.data.length != 0 ? (
          <FlatList style={styles.items}
            data={this.state.data}
            renderItem={this.renderItem}
            keyExtractor={(item) => item.id}
          />) : (
          <Text> Aucunes actions n'ont été comtabilisées durant cette journée. </Text>
        )}
      </View>
    );
  }
}

export default ActionsList;

const styles = StyleSheet.create({
  items: {
    width: "100%",
  }
});
