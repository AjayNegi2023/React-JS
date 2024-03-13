import React, { Component } from "react";

class StateManagement extends Component {
  constructor() {
    super();
    this.state = {
      name: "Ajay",
    };
  }

   handleClick = () =>{
      this.setState({
        name : "Ajay Negi "
      })
  }
  render() {
    return (
      <div>
        <h1> Hii {this.state.name}</h1>
        <button onClick={()=> this.handleClick()}>Let's Greet </button>
      </div>
    );
  }
}

export default StateManagement;
