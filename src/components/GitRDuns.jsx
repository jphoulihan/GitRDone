import React, { useState } from 'react';
import { isPropertySignature } from 'typescript';

function GitRDuns(props){

    const [isDun, setDun] = useState(false);

    function handleClick() {
        setDun(preVal => {
            return !preVal;
        });
    }

    return (
    <div onClick={()=> {
        props.onChecked(props.id);
        }}
    >
    <li>
        {props.text}
    </li>
    </div>
    );
}

export default GitRDuns;