import React from 'react';

const userInput = (props) => {
    return (
        <div className="UserInput">
            <input onChange={props.change} type="text" />
        </div>
    )
};

export default userInput;