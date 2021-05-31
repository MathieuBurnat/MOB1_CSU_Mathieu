import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Text, StyleSheet, TextInput, View, SafeAreaView, Button} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Homepage from './screens/homepage';
import Info from './screens/info';
import Login from './screens/login';

const Stack = createStackNavigator();

class app extends Component {


  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
                name="homepage"
                component={Homepage}
          />
          <Stack.Screen
            name="login"
            component={Login}
          />
          <Stack.Screen
              name="info"
              component={Info}
          />
        </Stack.Navigator>
    </NavigationContainer>
    );
  }
}

export default app;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  border:{
    borderStyle: "solid",
    borderWidth: "thin"
  }
});
