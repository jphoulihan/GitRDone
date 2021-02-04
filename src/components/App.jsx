import React, { useState } from "react";
import GitRDuns from "./GitRDuns";
import InputArea from "./InputArea";

function App(){

    const [items, setItems] = useState([]);

    function addItem(inputTex){
        setItems(prevItems => {
            return [...prevItems, inputTex]
        })
    }

    function deleteItem(id){
        setItems(prevItems => {
            return prevItems.filter((item, index) => {
                return index !== id;
            })
        });
    }

return ( 
        <div className='container'>
        <div className='header'>
            <h1>Git-R-Done </h1>
        </div>
        <InputArea onAdd={addItem}/>
            <div>
             <ul>
                {items.map((gitrduns, index) => (
                <GitRDuns key={index} id={index} text={gitrduns} onChecked={deleteItem}/>
                ))}
            </ul>
            </div>
        </div>
        );
}

export default App;

