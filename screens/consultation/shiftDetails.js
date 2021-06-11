import React from "react";

import { Text, StyleSheet } from "react-native";

class ShiftDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };

    this.renderItem = this.renderItem.bind(this);
  }

  render() {
    console.log(this.props.route.params);

    return (
      <Text> Here is the shift detailed  {this.props.route.params.test}</Text>
    );
  }
}

export default ShiftDetail;

const styles = StyleSheet.create({
});
