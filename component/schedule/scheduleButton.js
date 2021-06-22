import React from "react";

import { Text, StyleSheet, View } from "react-native";
import { Card, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { FlatList } from "react-native-gesture-handler";
import Moment from "moment";
import { showMessage } from "react-native-flash-message";
import myApi from "../../API/api";

class ScheduleButon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayLength: 0,
    };
  }

  componentDidMount() {
    myApi.getUnconfirmedWorkplans(localStorage.getItem("token")).then(
      (res) => {
        this.setState({
          arrayLength: res.data.length,
        });
      },
      (error) => {
        showMessage({
          message: "Impossible de charger les workplans.",
          type: "danger",
          duration: 5000,
        });
      }
    );
  }

  render() {
    let titile = "Horraires à confirmer [" + this.state.arrayLength + "]";
    return (
      <View>
        {this.state.arrayLength != 0 ? (
          <Button
            style={styles.child}
            title={titile}
            color="cadetblue"
            onPress={() => this.props.navigation.navigate("")}
          />
        ) : (
            <Text/>
        )}
      </View>
    );
  }
}

export default ScheduleButon;

const styles = StyleSheet.create({
  button: {},
});
