import React from "react";
import { Text } from "react-native";

class Disconnect extends React.Component {
  componentDidMount() {
    localStorage.clear();
    this.props.navigation.navigate("homepage");
  }

  render() {
    return <Text> Déconnection...</Text>;
  }
}

export default Disconnect;
