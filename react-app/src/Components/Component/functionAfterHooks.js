import React, {useState, useEffect} from "react";

function FunctionAfterHooks() {
    const [count, setCount] = useState(0);

    useEffect (() => {
        console.log("you click ${count} times");
    }, [count]
    );

    const handleIncrement = () => {
        setCount(count + 1);
    }

    return (
        <div>        
            <h1 style={{ fontSize: "18px" }}>
                function component After Hooks, Click {count} times    <nr></nr> <nr></nr>
                <button onClick={handleIncrement} style={{ fontSize: "18px" }}>
                    click me
                </button>
            </h1>
        </div>
    );
}

export default FunctionAfterHooks;
