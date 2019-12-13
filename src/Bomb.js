// your Bomb code here!
import React, { Component } from 'react'


class Bomb extends Component{
    
    
    state = {
        secondsLeft: this.props.initialCount
    }


    render(){
        const boom = this.state.secondsLeft === 0 ? "Boom!" : `${this.state.secondsLeft} seconds left before I go boom!` 
        return <div>{boom}</div>
    }
}

export default Bomb