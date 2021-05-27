import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground} from 'react-native';

import SelectCities from "./component/SelectCities.js"

class app extends Component {
  render(){
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <ImageBackground source={require('./back.jpg')} style={styles.image}>
          <Text style={styles.text}>WELCOME</Text>
          
          <form>
            <label>
              <input type="text" name="name" />
            </label>
  
            <select>
              <option value="grapefruit">Pamplemousse</option>
              <option value="lime">Citron vert</option>
              <option value="coconut">Noix de coco</option>
              <option value="mango">Mangue</option>
            </select>
  
            <input type="submit" value="Envoyer" />
          </form>
        <SelectCities></SelectCities>
        </ImageBackground>
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
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  text: {
    color: "white",
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0"
  }
});
