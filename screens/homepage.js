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
  }

  componentDidMount() {
    // Handle focus, in case of back button hit
    this.props.navigation.addListener("focus", () => {
      //Set user data to the user
      this.setState({
        user: {
          token: localStorage.getItem("token"),
          initials: localStorage.getItem("initials"),
        },
      });
    });
  }

  render() {
    let authButton;
    let message;

    //If the user is connected
    // => Set a welcome message
    // => Set the "login button" to a "disconnect button"
    if (this.state.user.token) {
      message = <Text> Welcome {this.state.user.initials} !! </Text>;

      authButton = (
        <View>
          <Button
            title="Se déconnecter"
            onPress={() => this.props.navigation.navigate("disconnect")}
          />
          <Button
            title="Voir les consultations"
            onPress={() => this.props.navigation.navigate("consultation")}
          />
          <Button
            title="Voir les rapports"
            onPress={() => this.props.navigation.navigate("rapport")}
          />
        </View>

      );
    } else {
      authButton = (
        <Button
          title="Se connecter"
          onPress={() => this.props.navigation.navigate("login")}
        />
      );
    }

    return (
      <View style={styles.container}>
        <Text> Welcome </Text>

        {authButton}

        <Button
          title="Info"
          onPress={() => this.props.navigation.navigate("info")}
        />

        {message}
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
