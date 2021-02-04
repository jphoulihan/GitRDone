import React, { useState } from "react";

function InputArea(props) {

    const [inputTex, setInput] = useState("");

    function handleChange(event) {
        const newValue = event.target.value;
        setInput(newValue);
    }

    return (
    <div className="form">
        <input onChange={handleChange} type="text" value={inputTex}></input>
        <button onClick={()=>{
            props.onAdd(inputTex);
            setInput(" ");
        }}>
            <span>Add</span>
        </button>
    </div>
    );
}

export default InputArea;