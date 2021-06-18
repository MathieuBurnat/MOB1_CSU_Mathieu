import React from "react";
import { Text, View, Button} from "react-native";
import { showMessage, hideMessage } from "react-native-flash-message";

class Disconnect extends React.Component {
  componentDidMount() {
    localStorage.clear();
    this.props.navigation.navigate("homepage");
    showMessage({
      message: "Vous êtes déconnecté, Bonne journée !",
      type: "success",
      duration: 2000,
    });
  }

  render() {
    return <Text> Déconnection...</Text>;
  }
}

export default Disconnect;
