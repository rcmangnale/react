import React, {useState} from 'react';

const Timer = (props) => {

    //const [age,setAge] = useState("23");

    return (
        <div>
            <input type="text" onKeyUp={(e)=>{props.updateName(e.target.value)}} ></input>
            <p>Name: {props.name} </p>
        </div>
    )
}
export default Timer