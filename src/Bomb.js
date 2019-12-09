// your Bomb code here!
import React, { Component } from 'react';

export default class Bomb extends Component {
    constructor(props) {
        super()
        this.state = {
            secondsLeft : props.initialCount
        }
    }
    
    render(){
        return this.state.secondsLeft > 0 ? (
            <div>
                <p>
                    {this.state.secondsLeft} seconds left before I go boom!
                </p>
            </div>
        ) : (
            <div>
                <p>
                    Boom!
                </p>
            </div>
        )
    }
}