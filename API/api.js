import React from 'react';

import axios from 'axios';

class API {

  getDataFromBase(){
    let data;
    axios.get("http://127.0.0.1:8000/api/bases")
    .then(res => {
      data = res.data;
      console.log(data);
      return data;
    })
    .catch(error => console.error(`Error : ${error}`))
  }
}

const myApi = new API();
export default myApi;
