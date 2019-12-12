import React, { Component } from "react";

class Bomb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secondsLeft: props.initialCount
    };
  }
  render() {
    return this.state.secondsLeft === 0
      ? "Boom!"
      : +this.state.secondsLeft + " seconds left before I go boom!";
  }
}

export default Bomb;
