import React, { Component } from "react";

export default class StateCounter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  handleClickCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  incremental = () => {
    this.increment5();
    this.increment5();
    this.increment5();
    this.increment5();
    this.increment5();
  };
  increment5 = () => {
    this.setState((prevCount)=>({
      count : prevCount.count+5
    }),()=>{
       console.log(this.state.count);
    });

    // console.log(this.state.count);
  };
  render() {
    return (
      <div>
        <h1> Click : {this.state.count}</h1>
        <button onClick={() => this.incremental()}>Let's Greet </button>
      </div>
    );
  }
}
