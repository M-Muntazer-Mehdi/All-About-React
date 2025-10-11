import React from "react";

function IfStatement(props)
{
    if(props.isLoggedIn)
    {
        return <h3>welcome back!</h3>;
    }
    else{
        return <h3>Please, Sign Up!</h3>;
    }
}
function TernaryOperator(props)
{
    return(
        <div>
            {props.isLoggedIn ? (
                <h3>Welcome Back!</h3>
            ) : (
                <h3>Please, Sign Up!</h3>
            )}
        </div>
    );
}

function LogicalOperator(props){
    return(
        <div>
            {props.isLoggedIn && <h3>Welcome Back!</h3>}
            {!props.isLoggedIn && <h3>Please! Sign Up!</h3>}
        </div>
    );
}

function SwitchStatement(props){
    let message;
    switch(props.isLoggedIn) {
        case true: 
            message = <h3>Welcome Back!</h3>;
            break;
        case false:
            message = <h3>Please, Sign Up!</h3>;
            break;
    }
    return<div>{message}</div>;
}

function ListOperator(props){
    return(
        <div>
                {props.items.map(item => <h3 key={item.id}>{item.id}: {item.name}</h3>)}
        </div>
    );
}

export {IfStatement, TernaryOperator, LogicalOperator, SwitchStatement, ListOperator}; 