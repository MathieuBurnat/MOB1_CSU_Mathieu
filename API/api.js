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
        console.log(data);
        this.setState({ data });

      })
      .catch(error => console.error(`Error : ${error}`))
  }

  render() {
    return (
      <ul>
        { this.state.data.map(base => <li>{base.name}</li>)}
      </ul>
    )
  }
}