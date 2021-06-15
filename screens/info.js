import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

class Info extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.message}> Information </Text>
        <View style={styles.container}>
          <Text>Ce projet est créé par dans le cadre du module <Text style={styles.initials}>MOB1</Text> avec comme objectif d'apprendre le React Native. </Text>
        </View>
        <View style={styles.container}>
          <Text>Si vous avez des questions, des suggestions ou des commentaires à me faire, n'hésitez surtout pas ! 0:'D</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: "10px",
  },
  message: {
    marginTop: "10px",
    marginBottom: "20px",
    fontSize: "20px",
    fontWeight: "bold",
    textAlign: "center",
  },
  initials :{
    color: "#009688",
  }
});

export default Info;
