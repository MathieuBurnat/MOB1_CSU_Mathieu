import React from "react";
import myApi from "../../API/api";
import { Text } from "react-native";

class GuardTours extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    myApi.getDataFromReports().then((res) => {
      this.setState({
        data: res.data,
      });
    });
  }

  render() {
    return (
      <Text> Guard Tours </Text>
    );
  }
}

export default GuardTours;