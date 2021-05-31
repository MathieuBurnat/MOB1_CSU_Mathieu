import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Text, StyleSheet, TextInput, View, SafeAreaView, Button} from 'react-native';

import SelectCities from "./component/SelectCities.js"

class app extends Component {


  render(){
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
          <Text> WELCOME</Text>
          
          <SafeAreaView>

          <Text>Login</Text>

          <TextInput
            style={{height: 40}}
            placeholder="Login"
          />

          <Text>Password</Text>

          <TextInput
            style={{height: 40, }}
            placeholder="Password"
            secureTextEntry={true}
          />

          <Button title="Login"/>

          </SafeAreaView>
        <SelectCities></SelectCities>
      </View>
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
