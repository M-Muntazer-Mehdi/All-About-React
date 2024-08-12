import React from "react";

function FunctionComponent(props) {
    return (
        <h1 style={{ fontSize: "18px" }}>
            function component before Hooks "return name: {props.name}"
        </h1>
    );
}

export default FunctionComponent;
