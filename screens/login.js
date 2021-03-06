import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import axios from "axios";
import { LoginContext } from '../component/login/loginContext'; 
import { showMessage } from "react-native-flash-message";
import myAPI from "../API/api"

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
        baseName: "",
      },
      message: "",
    };
    this.setInitials = this.setInitials.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.setBase = this.setBase.bind(this);
    this.getAdmin = this.getAdmin.bind(this);
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

  setBase(id, name){
    this.setState({
      user: {
        ...this.state.user,
        baseId : id,
        baseName : name,
      },
    });
  }

  getAdmin(token){
    let admin = 0;
    console.log("Token : ", token);

    myAPI.getAdmin(token).then((res) => {
      console.log(res.data);
      this.context.changeAdmin(res.data.admin);
    });
  }

  login = () =>
  {
    axios.post('http://127.0.0.1:8000/api/gettoken', {
      initials: this.state.user.initials,
      password: this.state.user.password,
    })
    .then((response) => {
      // Save the user's data with localStorage
      localStorage.setItem("initials", this.state.user.initials.toUpperCase());
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("baseId", this.state.user.baseId);
      localStorage.setItem("baseName", this.state.user.baseName);
      localStorage.setItem("admin", this.getAdmin())      

      this.context.changeToken(response.data.token);
      this.getAdmin(response.data.token);
      
      this.setState({message : ""});
      this.props.navigation.navigate("homepage"); 
    }, (error) => {
      console.log(error);
      this.setState({message : "Le nom d'utilisateur ou mot le passe est incorrect. "});
      showMessage({
        message: "Le nom d'utilisateur ou mot le passe est incorrect",
        type: "danger",
        duration: 2000,
      });
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
            maxLength={3}
          />

          <Text>Password</Text>

          <TextInput
            style={{ height: 40 }}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={this.setPassword}
          />

          <SelectCities setBase={ this.setBase }/>

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
