import React, { Component } from 'react'
class Timers extends React.Component{
    state = {
        age: "23"
    }

    render(){
        return (
            <div>
                <h1>Magicians...</h1>
                <input Type="text" onKeyUp={(e)=>{this.props.updateName(e.target.value)}}></input>
                <p>Name:{this.props.name}</p>
                <p>Age:{this.state.age}</p>
            </div>
        )
    }
}
export default Timers