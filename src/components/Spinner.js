import React, { Component } from "react";
import loading from "./loading.gif";
export class Spinner extends Component {
  render() {
    return (
      <div className="text-center my-1 mx-1">
        <img src={loading} alt="Loading" />
      </div>
    );
  }
}

export default Spinner;
