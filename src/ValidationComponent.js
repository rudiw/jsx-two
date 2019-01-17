import React from 'react';

const validation = (props) => {

    let result = null;

    if (props.length != null) {
        if (props.length >= 5) {
            result = "Text long enough";
        } else {
            result = "Text too short";
        }
    }

    return (
        <div>
            <p>The Text Length: {result}</p>
        </div>
    );
}

export default validation;