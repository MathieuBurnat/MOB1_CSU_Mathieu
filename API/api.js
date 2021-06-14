import React from "react";
import axios from "axios";

class API {
  // Return cities
  // This route doesn't need a token
  getCities() {
    return axios.get("http://127.0.0.1:8000/api/bases");
  }

  // Need the user's token
  getReports(token) {
    return axios
      .get("http://localhost:8000/api/reports", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
  }

  // Need the user's token
  // Show my actions into a shift 
  getMyactionsInShift(token, id) {
    return axios
      .get("http://127.0.0.1:8000/api/myactionsinshift/" + id, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
  }

  //Get pharmachecks to do on a base
  getPharmachecks(token, id) {
    return axios
      .get("http://127.0.0.1:8000/api/missingchecks/" + id, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
  }
}

const myApi = new API();
export default myApi;
