import React from "react";
import myApi from "../../API/api";
import { Picker } from "@react-native-picker/picker";

export default class SelectCities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    myApi.getCities().then((res) => {
      this.setState({
        data: res.data,
      });
    });
  }

  render() {
    return (
      <Picker
        onValueChange={(itemValue, itemIndex) =>
          (this.selectedValue = itemValue)
        }
      >
        {this.state.data.map((base) => (
          <Picker.Item label={base.name} value={base.id} key={base.id} />
        ))}
      </Picker>
    );
  }
}
