import React from "react";
import myApi from "../../API/api";
import { Picker } from "@react-native-picker/picker";
import { showMessage } from "react-native-flash-message";

export default class SelectCities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };

    this.setBaseToParent = this.setBaseToParent.bind(this);
    this.getBaseName = this.getBaseName.bind(this);
  }

  componentDidMount() {
    myApi.getCities().then((res) => {
      this.setState({
        data: res.data,
      });
    }, (error) => {
      showMessage({
        message: "Impossible de charger les villes. ",
        type: "danger",
        duration: 6000,
      });
    });
  }

  getBaseName(base_id) {
    let baseName = "";
    this.state.data.map((base) => {
      if (base_id == base.id) {
        baseName = base.name;
      }
    });
    return baseName;
  }

  setBaseToParent(base_id) {
    this.props.setBase(base_id, this.getBaseName(base_id));
  }

  render() {
    return (
      <Picker onValueChange={(itemValue) => {
        this.setBaseToParent(itemValue);
      }}>
        {this.state.data.map((base) => (
          <Picker.Item label={base.name} value={base.id} key={base.id} />
        ))}
      </Picker>
    );
  }
}
