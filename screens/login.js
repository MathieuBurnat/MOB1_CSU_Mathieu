import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import axios from "axios";
import { LoginContext } from '../component/login/loginContext'; 

import {
  Text,
  StyleSheet,
  TextInput,
  View,
  SafeAreaView,
  Button,
} from "react-native";

import SelectCities from "../component/login/SelectCities.js";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      user: {
        initials: "",
        password: "",
        baseId: 0,
      },
      message: "",
    };
    this.setInitials = this.setInitials.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.setBaseId = this.setBaseId.bind(this);
  }

  setInitials(initials) {
    this.setState({
      user: {
        ...this.state.user,
        initials,
      },
    });
  }

  setPassword(password) {
    this.setState({
      user: {
        ...this.state.user,
        password,
      },
    });
  }

  setBaseId(baseId){
    this.setState({
      user: {
        ...this.state.user,
        baseId,
      },
    });
  }

  login = () =>
  {
    axios.post('http://127.0.0.1:8000/api/gettoken', {
      initials: this.state.user.initials,
      password: this.state.user.password,
    })
    .then((response) => {
      localStorage.setItem("initials", this.state.user.initials.toUpperCase());
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("baseId", this.state.user.baseId);

      this.context.changeToken(response.data.token);
      this.props.navigation.navigate("homepage");
    }, (error) => {
      console.log(error);
      this.setState({message : "The login or the password is wrong. "});
    });
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
            onChangeText={this.setInitials}
          />

          <Text>Password</Text>

          <TextInput
            style={{ height: 40 }}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={this.setPassword}
          />

          <SelectCities setBaseId={ this.setBaseId }/>

          <Button
            title="Login"
            onPress={this.login}
          />

        </SafeAreaView>
        <Text> {this.state.message} </Text>
      </View>
    );
  }
}

Login.contextType = LoginContext;

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
