import React from "react";
import axios from "axios";

class API {
  getCities() {
    return axios.get("http://127.0.0.1:8000/api/bases");
  }

  getReports(token) {
    return axios
      .get("http://localhost:8000/api/reports", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
  }

  getMyactionsInShift(token, id) {
    return axios
      .get("http://127.0.0.1:8000/api/myactionsinshift/"+id, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
  }
}

const myApi = new API();
export default myApi;
