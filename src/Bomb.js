// your Bomb code here!
import React, { Component } from 'react'

export default class Bomb extends Component{
   constructor(props){
       super()
       this.state = {secondsLeft: props.initialCount}
   }
    
   render(){
    console.log(this.state.secondsLeft)
    const msg = this.state.secondsLeft !== 0 ? `${this.state.secondsLeft} seconds left before I go boom!` : 'Boom!'
        return(
            <div>
                {this.state.secondsLeft !== 0 ? `${this.state.secondsLeft} seconds left before I go boom!` : 'Boom!'}
                
            </div>
            
        )
    }
}