import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

class Homepage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        token: "",
        initials: "",
      },
    };

    let message;
  }

  componentDidMount() {
    // Handle focus, in case of back button hit
    this.props.navigation.addListener("focus", () => {
      //Set user data to the user
      this.setState({ user : { token : localStorage.getItem("token"), initials : localStorage.getItem("initials")} });
    });
  }

  render() {
    if(this.state.user){
        this.message = "you'r logged in !"
    }
    else{
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
