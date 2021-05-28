import React from 'react';

import axios from 'axios';
import myApi from "../API/api.js"


export default class SelectCities extends React.Component {
  componentDidMount(){
    const cities = myApi.getDataFromBase();
  }

  render() {
    return (
      <ul>
        {
          ({ cities }) => (
            <li> {cities.name} </li>
          )
        }
      </ul>
    )
  }
}