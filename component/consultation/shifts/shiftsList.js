import React from "react";
import myApi from "../../../API/api";

import { Text, StyleSheet } from "react-native";
import { Card, ListItem, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';

import { FlatList } from "react-native-gesture-handler";

class ShiftsList extends React.Component {
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
        data: res.data,
      });
    });
  }

  renderItem({ item }) {
    let card = (
      <Card>
        <Text> Le {item.date} à {item.base}
          <Button style={styles.detailBtn}

            icon={
              <Icon
                name="search"
                size={15}
                color="white"
              />
            }

            onPress={() => this.props.navigation.navigate("shiftDetail", {item})}
          />
        </Text>

      </Card>
    );
    return card;
  }

  render() {
    return (
      <FlatList style={styles.items}
        data={this.state.data.shift}
        renderItem={this.renderItem}
        keyExtractor={(item) => item.id}
      />
    );
  }
}

export default ShiftsList;

const styles = StyleSheet.create({
  items: {
    width: "100%",
  },
  detailBtn: {
    width: "5%",
  }
});
