import React from 'react';

import axios from 'axios';
import myApi from "../API/api.js"
import { Picker } from '@react-native-picker/picker';


export default class SelectCities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data : [],
    };
  }

  componentDidMount(){
    myApi.getDataFromBase()
    .then(res => {
      this.setState({ 
        data : res.data 
      });
    })
  }

  render() {
    return (
      <Picker onValueChange={(itemValue, itemIndex) => this.selectedValue = itemValue}>
          { this.state.data.map(base =>  <Picker.Item label={base.name} value={base.id} />)}
      </Picker>
    );
  }
}
