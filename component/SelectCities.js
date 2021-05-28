import React from 'react';

import axios from 'axios';
import myApi from "../API/api.js"


export default class SelectCities extends React.Component {

  componentDidMount(){
    myApi.getDataFromBase();
    const test = myApi.state;
  }

  render() {
    console.log(this.test)
    
    return (
      <p>test</p>
    )
  }
}