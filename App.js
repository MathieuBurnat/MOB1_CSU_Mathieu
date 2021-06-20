import "react-native-gesture-handler";

import React, { Component } from "react";
import { StyleSheet } from "react-native";


import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from 'react-native-vector-icons/FontAwesome';

import Homepage from "./screens/homepage";
import Info from "./screens/info";
import Login from "./screens/login";
import { LoginContext } from "./component/login/loginContext";

import Disconnect from "./screens/disconnect";

import Consultation from "./screens/consultation/consultation";
import Shift from "./screens/consultation/shifts/shift";
import ShiftDetail from "./screens/consultation/shifts/shiftDetails";

import Stup from "./screens/consultation/drugs/stup";

import Report from "./screens/report/report";
import Pharmacheck from "./screens/report/pharmacheck";
import Novacheck from "./screens/report/novacheck";

import FlashMessage from "react-native-flash-message";

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
    return (
      <LoginContext.Provider
        value={{
          changeToken: this.changeToken,
        }}
      >
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={({ navigation }) => ({
              headerStyle: {
                backgroundColor: '#3f51b5',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerRight: () => (
                <span>
                  <Icon name={'home'}
                    onPress={() => navigation.navigate('homepage')}
                    size={20}
                    style={styles.homeIcon}
                  />

                  {this.state.token != null ? (
                    <Icon name={'sign-out'}
                      onPress={() => navigation.navigate('disconnect')}
                      size={20}
                      style={styles.logoutIcon}
                    />
                  ) : (
                    <Icon />
                  )}
                </span>

              ),
            })}
          >
            { /*  If the user is not connected */ }
            {this.state.token == null ? (
              <>
                { /* Then he could only access to the three basic pages */ }
                <Stack.Screen name="login" component={Login} />
                <Stack.Screen name="homepage" component={Homepage} />
                <Stack.Screen name="info" component={Info} />
              </>
            ) : (
              <>
              { /* Otherwise the user could access to the other pages */ }
                <Stack.Screen name="homepage" component={Homepage} />
                <Stack.Screen name="login" component={Login} />
                <Stack.Screen name="disconnect" component={Disconnect} />
                <Stack.Screen name="info" component={Info} />
                <Stack.Screen name="consultation" component={Consultation} />
                <Stack.Screen name="shifts" component={Shift} />
                <Stack.Screen name="shiftDetail" component={ShiftDetail} />
                <Stack.Screen name="stup" component={Stup} />
                <Stack.Screen name="report" component={Report} />
                <Stack.Screen name="pharmacheck" component={Pharmacheck} />
                <Stack.Screen name="novacheck" component={Novacheck} />
              </>
            )}
          </Stack.Navigator>
          <FlashMessage position="top"/>
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
  homeIcon: {
    paddingLeft: "15px",
    paddingRight: "15px",
  },
  logoutIcon: {
    paddingLeft: "15px",
    paddingRight: "15px",
    color: "#a00000",
  }
});
