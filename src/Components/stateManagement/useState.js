import React, {useState} from "react";

function StateExample(){
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    return(
        <div>
            <h1 style={{ fontSize: "18px" }}> Click to increase the useState example count: {count} <nr></nr>
                <button style={{ fontSize: "18px" }} onClick={increment}> 
                    Click me
                </button>
            </h1>
        </div>
    );
}

export default StateExample;