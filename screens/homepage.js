import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

class Homepage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogged: localStorage.getItem("isLogged"),
    };

    let message;
  }

  componentDidMount() {
    // Handle focus, in case of back button hit
    this.props.navigation.addListener("focus", () => {
      this.setState({isLogged : localStorage.getItem("isLogged")});
    });
  }

  render() {

    if (localStorage.getItem("isLogged")){
      this.message = "you'r logged in !"
    }else{
      this.message = "Nop"
    }

    return (
      <View style={styles.container}>
        <Text> Welcome </Text>
        <Button
          title="Se connecter"
          onPress={() => this.props.navigation.navigate("login")}
        />
        <Button
          title="Info"
          onPress={() => this.props.navigation.navigate("info")}
        />
        <Text> {this.message} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Homepage;
