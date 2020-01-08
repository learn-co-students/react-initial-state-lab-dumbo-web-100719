// your Bomb code here!
import React, { Component } from 'react'

export default class Bomb extends Component {

    state = {
        secondsLeft: this.props.initialCount
    }

    renderBoom = () => {
        if (this.state.secondsLeft === 0) {
            return "Boom!"
        } else {
            return `${this.state.secondsLeft} seconds left before I go boom!`
            
        }
    }
    



    render() {
        return (
            <div>
                {this.renderBoom()}
            </div>
        )
    }
}
