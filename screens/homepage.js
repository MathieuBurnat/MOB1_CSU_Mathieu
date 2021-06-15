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
    let authView;
    let message;
    //If the user is connected
    // => Set a welcome message
    // => Set the "login button" to a "disconnect button"
    if (this.state.user.token) {
      message = (
        <Text style={styles.message}> Bienvenue <Text style={styles.initials}> {this.state.user.initials} </Text> ! </Text>
      );

      authView = (
        <div>
          <Button style={styles.child}
            title="Voir les consultations"
            color="cadetblue"
            onPress={() => this.props.navigation.navigate("consultation")}
          />
          <Button style={styles.child}
            title="Voir les rapports"
            color="#b65bc9"
            onPress={() => this.props.navigation.navigate("report")}
          />
        </div>
      );
    } else {
      message = (
        <Text style={styles.message}> Vous n'êtes pas encore  <Text style={styles.initials}> connecté </Text> </Text>
      );

      authView = (
        <Button
          title="Se connecter"
          onPress={() => this.props.navigation.navigate("login")}
        />
      );
    }

    return (
        <View style={styles.parent}>
          {message}
          {authView}
          <Button style={styles.child}
            title="Info"
            onPress={() => this.props.navigation.navigate("info")}
            color="#3f51b5"
          />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    backgroundColor: "#fff",
    flex: 1,
  },
  child: {
    paddingTop: "50px",
    paddingBottom: "50px"
  },
  message: {
    marginTop: "10px",
    marginBottom: "40px",
    fontSize: "20px",
    fontWeight: "bold",
    textAlign: "center",
  },
  initials :{
    color: "#009688",
  }
});

export default Homepage;
