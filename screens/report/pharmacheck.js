import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import PharmacheckList from '../../component/report/pharmacheck/pharmacheckList'
class Pharmacheck extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Garde </Text>

        <Button
          title="Rapport"
          onPress={() => this.props.navigation.navigate("report")}
        />
        <PharmacheckList navigation={this.props.navigation}> </PharmacheckList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Pharmacheck;
