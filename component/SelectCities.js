import React from 'react';

import axios from 'axios';
import myApi from "../API/api.js"


export default class SelectCities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cities = [],
    };
  }

  componentDidMount(){
    myApi.getDataFromBase().then(res => {
      res => {
        this.setState({
          cities: res.data
        });
      }
      console.log(res.data);
      console.log(state.cities);
    })
  }

  render() {
    return (
      <p>test</p>
    )
  }
}