import React from "react";

import { Text, StyleSheet, View } from "react-native";
import { Card, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { FlatList } from "react-native-gesture-handler";
import Moment from "moment";
import { showMessage } from "react-native-flash-message";
class ScheduleButon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    //myApi.getReports(localStorage.getItem("token")).then((res) => {
    //  this.setState({
    //    data: res.data,
    //  });
    //}, (error) => {
    //  showMessage({
    //    message: "Impossible de charger la liste des shifts. ",
    //    type: "danger",
    //    duration: 6000,
    //  });
    //});
  }

  render() {
    return (
      <View>
        <Button
          style={styles.child}
          title="Horraires à confirmer"
          color="cadetblue"
          onPress={() => this.props.navigation.navigate("consultation")}
        />
      </View>
    );
  }
}

export default ScheduleButon;

const styles = StyleSheet.create({
  button: {},
});
