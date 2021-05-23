import React from 'react';

import axios from 'axios';

export default class API extends React.Component {
  data = {};

  componentDidMount() {
    axios.get(`http://127.0.0.1:8000/api/bases`)
      .then(res => {
        this.data = res.data;
        console.log(this.data);
      })
      .catch(error => console.error(`Error : ${error}`))
  }

  render() {
    return (
      <ul>
        <p>test</p>
      </ul>
    )
  }
}