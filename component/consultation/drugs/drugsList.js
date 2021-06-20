import React from "react";
import myApi from "../../../API/api";

import { Text, StyleSheet } from "react-native";
import { Card } from 'react-native-elements'
import { FlatList } from "react-native-gesture-handler";
import { showMessage } from "react-native-flash-message";

class DrugsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };

    this.renderItem = this.renderItem.bind(this);
  }

  componentDidMount() {
    myApi.getReports(localStorage.getItem("token")).then((res) => {
      this.setState({
        data: res.data.drug,
      });
    }, (error) => {
      showMessage({
        message: "Impossible de charger les stupédiants. ",
        type: "danger",
        duration: 6000,
      });
    });
  }

  renderItem({ item }) {
    let card = (
      <Card>
        <Text> Semaine {item.week}, à {item.base} </Text>
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

export default DrugsList;

const styles = StyleSheet.create({
  button: {
  }
});
