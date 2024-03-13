import React, { Component } from "react";

class REF extends Component {
  constructor() {
    super();
    //Creat REF
    this.inputRef = React.createRef();

    //Second Way To create REF
    //CallBack Approach
    this.cbRef = null;
    this.setCbRef = (element) => {
      this.cbRef = element;
    };
  }

  componentDidMount() {
    this.inputRef.current.focus();
    console.log(this.inputRef.current.value);

    if (this.cbRef) this.cbRef.focus();
  }

  clickHandler = () => {
    // this.inputRef.current.focus();
    alert(`Hello ${this.inputRef.current.value}`);
  };
  clickHandler2 = () => {
    // this.inputRef.current.focus();
    alert(`Hello ${this.cbRe.value}`);
  };
  render() {
    console.log(this.inputRef);
    return (
      <div>
        <input ref={this.inputRef} />
        <button onClick={() => this.clickHandler()}>Greet</button>
        <br></br>
        <input ref={this.setCbRef} />
        <button onClick={() => this.clickHandler2()}>Greet2</button>
      </div>
    );
  }
}

export default REF;
