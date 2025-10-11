import React, {useReducer} from "react";

const initialState = { count:0 };

function reducer(state, action){
    switch(action.type) {
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
            return {count: state.count - 1};
        default:
            throw new Error();
    }
}

function ReducerExample () 
{
    const [state, dispatch] = useReducer(reducer, initialState);

    return(
        <div>
            <h1 style={{ fontSize: "18px" }}> Click to increase/decrease the useReducer example count: {state.count} <nr></nr>
                <button style={{ fontSize: "18px" }} onClick ={() => dispatch({ type: 'increment' })}>
                    Increment
                </button>
                <button style={{ fontSize: "18px" }} onClick ={() => dispatch({ type: 'decrement' })}>
                    Decrement
                </button>
            </h1>
        </div>
    );
}

export default ReducerExample;