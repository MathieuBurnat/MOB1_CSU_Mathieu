import React from 'react';

import axios from 'axios';

export default class API {
  getDataFrom(url){
    let data;
    axios.get(url)
    .then(res => {
      data = res.data;
      console.log(data);

      return data;
    })
    .catch(error => console.error(`Error : ${error}`))
  }
}