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

  getAdmin(token){
    return axios
    .get("http://127.0.0.1:8000/api/user/", {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
  }

  getUnconfirmedWorkplans(token){
    return axios
    .get("http://127.0.0.1:8000/api/unconfirmedworkplans/", {
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

  //Get Missing to do on a baseId (Return : Return Pharma & Nova list on a base_id(city))
  getMissingchecks(token, id) {
    return axios
      .get("http://127.0.0.1:8000/api/missingchecks/" + id, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
  }

  postPharmacheck(token, item) 
  {
    return axios
      .post("http://127.0.0.1:8000/api/pharmacheck/", item, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
  }

  postNovacheck(token, item) 
  {
    return axios
      .post("http://127.0.0.1:8000/api/novacheck/", item, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
  }

  confirmworkplan(token, item) 
  {
    return axios
      .post("http://127.0.0.1:8000/api/confirmworkplan/", item, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
  }
}

const myApi = new API();
export default myApi;
