import React from 'react';

import axios from 'axios';

export default class API extends React.Component {
  state = {
      data: []
  }

  componentDidMount() {
    axios.get(`http://127.0.0.1:8000/api/bases`)
    .then(res => {
      const data = res.data;
      this.setState({ data });
    })
    .catch(error => console.error(`Error : ${error}`))
  }

  render()
  {
      return (
        <p>{this.props.test}</p>
      )
  }
}