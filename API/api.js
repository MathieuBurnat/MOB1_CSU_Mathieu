import React from 'react';
import axios from 'axios';

class API {
  getDataFromBase(){
    return axios.get("http://127.0.0.1:8000/api/bases");
  }
}

const myApi = new API();
export default myApi;
