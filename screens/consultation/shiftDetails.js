import React from "react";

import { Text, StyleSheet } from "react-native";

class ShiftDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  render() {
    return (
      <Text> Here is the shift detailed :</Text>
    );
  }
}

export default ShiftDetail;

const styles = StyleSheet.create({
});
