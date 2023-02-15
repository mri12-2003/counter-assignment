
import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "sharan",
      data: 1,
    };
  }

  dochallenge1 = () => {
    this.setState({
      data: this.state.data + 1,
    });
  };
  dochallenge2 = () => {
    this.setState({
      data: this.state.data - 1,
    });
  };
  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.data >= 11) {
      alert("terminated at 10");
      return false;
    } else {
      return true;
    }
  }

  render() {
    return (
      <div>
        <h1 className="heading"> {this.state.data} </h1>
        <button onClick={this.dochallenge1}>Increment </button>
        <button onClick={this.dochallenge2}>Decrement </button>
        {/* <button onClick={unlike}>Decrement </button> */}
      </div>
    );
  }
}
