import React from 'react';

import axios from 'axios';

export default class API extends React.Component {
  state = {
      data: []
  }

  getDataFrom(url){
    let data;
    axios.get(url)
    .then(res => {
      data = res.data;
      console.log(data);
      this.setState({ data });
    })
    .catch(error => console.error(`Error : ${error}`))
  }

  render()
  {
    let test;
    if (this.state.data == null)
      test = this.getDataFrom(this.props.url);

    return (
      <p> {test} </p>
    )
  }
}