import "react-native-gesture-handler";

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

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Homepage from "./screens/homepage";
import Info from "./screens/info";
import Login from "./screens/login";
import Disconnect from "./screens/disconnect";

const Stack = createStackNavigator();

class app extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        token: localStorage.getItem("token"),
        initials: localStorage.getItem("initials"),
      },
    };
  }

  render() {
    //let {isLogged} = localStorage.getItem("isLogged");
    //If the user is connected
    // -> Then he could access to the special pages
    // Doc interesting here 
    // https://reactnavigation.org/docs/auth-flow/
    return (

      this.state.user.token ? (
        <>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="login" component={Login} options={{ headerShown: true }} />
              <Stack.Screen name="homepage" component={Homepage} />
            </Stack.Navigator>
          </NavigationContainer>

        </>
      ) : (
        <>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="homepage" component={Homepage} />
              <Stack.Screen name="login" component={Login} options={{ headerShown: true }} />
              <Stack.Screen name="info" component={Info} />
              <Stack.Screen name="disconnect" component={Disconnect} />
            </Stack.Navigator>
          </NavigationContainer>
        </>
      )
    );
  }
}

export default app;

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
