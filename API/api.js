import React from 'react';
import axios from 'axios';

class API {
  state = {
      data: []
  }

  getDataFromBase(){
    axios.get("http://127.0.0.1:8000/api/bases")
    .then(res => {
      const data = res.data;
      this.state = data;
      console.log(this.state);
    })
    .catch(error => console.error(`Error : ${error}`))
  }
}

const myApi = new API();
export default myApi;
