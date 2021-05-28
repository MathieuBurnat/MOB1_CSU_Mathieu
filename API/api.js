import React from 'react';

import axios from 'axios';

class API {
  getDataFromBase(){
    return axios.get("http://127.0.0.1:8000/api/bases")
    .then(res => {
      const data = res.data;
      console.log(data);
    })
    .catch(error => console.error(`Error : ${error}`))
  }
}

const myApi = new API();
export default myApi;
