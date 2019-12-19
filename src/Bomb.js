import React, { Component } from 'react';

class Bomb extends Component {
    state ={
        secondsLeft: this.props.initialCount  
    }

    coundownSeconds = () =>{
        if(this.state.secondsLeft !== 0){
            return <div>
        {this.state.secondsLeft} seconds left before I go boom!
        </div>
        }else{
            return <div>Boom!</div>
        }
    }

    render() {
        return (this.coundownSeconds());
    }
}

export default Bomb;