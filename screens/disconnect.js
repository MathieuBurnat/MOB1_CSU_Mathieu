import React from "react";
import { Text, View, Button} from "react-native";
import { showMessage, hideMessage } from "react-native-flash-message";
import { LoginContext } from '../component/login/loginContext'; 

class Disconnect extends React.Component {
  componentDidMount() {
    localStorage.clear();

    console.log(this.context);

    this.context.changeAdmin(0);
    this.context.changeToken(null);

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

Disconnect.contextType = LoginContext;

export default Disconnect;
