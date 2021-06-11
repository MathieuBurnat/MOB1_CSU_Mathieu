import React from "react";
import myApi from "../../API/api";
import { Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";

class GuardTours extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };

    this.renderItem = this.renderItem.bind(this);
  }

  componentDidMount() {
    myApi.getDataFromReports(localStorage.getItem("token")).then((res) => {
      this.setState({
        data: res.data,
      });
      console.log(this.state.data.shift);
    });
  }

  renderItem({item}){
    return <Text> {item.base} {item.date} </Text>;
  } 

  render() {
    return (
      <FlatList
        data={this.state.data.shift}
        renderItem={this.renderItem}
        keyExtractor={(item) => item.id}
      />
    );
  }
}

export default GuardTours;
