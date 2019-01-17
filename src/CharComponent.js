import React from 'react';

import './CharComponent.css';

const charComponent = (props) => {
    return (
        <div className="charComponent" onClick={props.onRemove}>
            <p>{props.userInput}</p>
        </div>
    );
}

export default charComponent;