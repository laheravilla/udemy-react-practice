import React from "react";

const userInput = (props) => {
    return (
        <div className="UserOutput">
            <p onMouseEnter={props.enter}
               onMouseLeave={props.leave}
            >
                {props.username}, Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
        </div>
    )
};

export default userInput;