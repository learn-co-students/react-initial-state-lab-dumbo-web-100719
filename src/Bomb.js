// your Bomb code here!
import React, { Component } from "react";

export default class Bomb extends Component {
	constructor(props) {
		//props that the component gets from its parent
		super();
		this.state = {
			//define initial state with a key of 'someKey' set to the 'someValue' prop
			secondsLeft: props.initialCount
		};
	}
	render() {
		return this.state.secondsLeft > 0 ? (
			<div>
				<p>{this.state.secondsLeft} seconds left before I go boom!</p>
			</div>
		) : (
			<p>Boom!</p>
		);
	}
}
