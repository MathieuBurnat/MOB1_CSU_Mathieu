import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { Text, StyleSheet, TextInput, View, SafeAreaView, Button, } from "react-native";


import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Homepage from "./screens/homepage";
import Info from "./screens/info";
import Login from "./screens/login";
import { LoginContext } from "./component/login/loginContext";

import Disconnect from "./screens/disconnect";

import Consultation from "./screens/consultation/consultation";
import Shift from "./screens/consultation/shift";
import ShiftDetail from "./screens/consultation/shiftDetails";

import Stup from "./screens/consultation/Stup";

import Rapport from "./screens/rapport/rapport";
import Pharmacheck from "./screens/rapport/pharmacheck";
import Novacheck from "./screens/rapport/novacheck";

const Stack = createStackNavigator();

class app extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: localStorage.getItem("token"),
    };
  }

  changeToken = (token) => {
    this.setState({
      token: token,
    });
  };

  render() {
    //let {isLogged} = localStorage.getItem("isLogged");
    //If the user is connected
    // -> Then he could access to the special pages
    // Doc interesting here
    // https://reactnavigation.org/docs/auth-flow/
    return (
      <LoginContext.Provider
        value={{
          changeToken: this.changeToken,
        }}
      >
        <NavigationContainer>
          <Stack.Navigator>
            {this.state.token == null ? (
              <>
                <Stack.Screen
                  name="login"
                  component={Login}
                  options={{ headerShown: true }}
                />
                <Stack.Screen name="homepage" component={Homepage} />
              </>
            ) : (
              <>
                <Stack.Screen name="homepage" component={Homepage} />
                <Stack.Screen
                  name="login"
                  component={Login}
                  options={{ headerShown: true }}
                />
                <Stack.Screen name="disconnect" component={Disconnect} />
                <Stack.Screen name="info" component={Info} />
                <Stack.Screen name="rapport" component={Rapport} />
                <Stack.Screen name="consultation" component={Consultation} />
                <Stack.Screen name="shifts" component={Shift} />
                <Stack.Screen name="shiftDetail" component={ShiftDetail}/>
                <Stack.Screen name="stup" component={Stup} />
                <Stack.Screen name="pharmacheck" component={Pharmacheck} />
                <Stack.Screen name="novacheck" component={Novacheck} />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </LoginContext.Provider>
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
