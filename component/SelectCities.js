import React from 'react';

import axios from 'axios';
import myApi from "../API/api.js"


export default class SelectCities extends React.Component {
 
  render() {
    return (
      <p> { myApi.getDataFromBase() } </p>
      )

    //could be return data as object and play with 'em into another component ?
    /*
        <>
        <Cat name="Munkustrap" />
        <Cat name="Spot" />
        </>

        Interesting : https://medium.com/@cristi.nord/props-and-how-to-pass-props-to-components-in-react-part-1-b4c257381654#:~:text=React%20%E2%80%94%20Render%20Props,implementing%20its%20own%20render%20logic.
    */
  }
}