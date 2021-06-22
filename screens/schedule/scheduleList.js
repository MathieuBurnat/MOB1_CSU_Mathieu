import React from "react";
import myApi from "../../API/api";

import { Text, StyleSheet, View } from "react-native";
import { Card } from 'react-native-elements'
import { showMessage } from "react-native-flash-message";

import { FlatList } from "react-native-gesture-handler";
import SheduleDetail from "../../component/schedule/scheduleDetail"

class ScheduleList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };

    this.renderItem = this.renderItem.bind(this);
  }

  componentDidMount() {
    myApi.getUnconfirmedWorkplans(localStorage.getItem("token")).then(
      (res) => {
        this.setState({
          data: res.data,
        });
        console.log(res.data);
      },
      (error) => {
        showMessage({
          message: "Impossible de charger les workplans à comptabiliser.",
          type: "danger",
          duration: 5000,
        });
      }
    );
  }

  renderItem({ item }) {
    return <SheduleDetail item={item}/>
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
          <Text> Aucuns workplans ne doivent être contabilisés ! </Text>
        )}
      </View>
    );
  }
}

export default ScheduleList;

const styles = StyleSheet.create({
  items: {
    width: "100%",
  }
});
