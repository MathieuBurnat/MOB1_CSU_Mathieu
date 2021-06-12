import React from "react";
import myApi from "../../../API/api";

import { Text, StyleSheet, View } from "react-native";
import { Card, ListItem, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';

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
    console.log(this.state.data.length);
    
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
