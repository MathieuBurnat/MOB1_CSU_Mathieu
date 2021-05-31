import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  TextInput,
  View,
  SafeAreaView,
  Button,
} from "react-native";

import SelectCities from "../component/SelectCities.js";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      user: {
        login: "",
        initials: "",
        password: "",
      },
    };
    this.setLogin = this.setLogin.bind(this);
    this.setPassword = this.setPassword.bind(this);
  }

  setLogin(login) {
    this.setState({
      user: {
        ...this.state.user,
        login,
      },
    });
    console.log(this.state.user);
  }

  setPassword(password) {
    this.setState({
      user: {
        ...this.state.user,
        password,
      },
    });
    console.log(this.state.user);
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text> WELCOME</Text>

        <SafeAreaView>
          <Text>Login</Text>

          <TextInput
            style={{ height: 40 }}
            placeholder="Login"
            onChangeText={this.setLogin}
          />

          <Text>Password</Text>

          <TextInput
            style={{ height: 40 }}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={this.setPassword}
          />

          <Button title="Login" />

          <SelectCities></SelectCities>
        </SafeAreaView>
      </View>
    );
  }
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  border: {
    borderStyle: "solid",
    borderWidth: "thin",
  },
});
