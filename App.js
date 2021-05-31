import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button} from 'react-native';

import SelectCities from "./component/SelectCities.js"

class app extends Component {


  render(){
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
          <Text>WELCOME</Text>
          
          <SafeAreaView>

          <TextInput/> 
          <Text>Password</Text>

          <TextInput/>

          <Button title="Press me"/>

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
  }
});
