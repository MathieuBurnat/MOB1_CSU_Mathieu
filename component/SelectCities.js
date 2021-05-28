import React from 'react';

import axios from 'axios';
import myApi from "../API/api.js"


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
      <ul>
        { this.state.data.map(base => <li>{base.name}</li>)}
      </ul>
    )
  }
}