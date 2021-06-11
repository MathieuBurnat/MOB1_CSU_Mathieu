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
    myApi.getDataFromReports(localStorage.getItem("token")).then((res) => {
      this.setState({
        data: res.data,
      });
      console.log(this.state.data);
    });
  }

  render() {
    return (
      <Text> Guard Tours </Text>
    );
  }
}

export default GuardTours;