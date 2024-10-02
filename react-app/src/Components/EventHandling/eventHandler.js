import React from "react";
import PassingFunction from './passingFunctionAsEventHandler';
import Inline from "./inlineEventHandler";
import Object from "./eventObject";

function EventHandler (){
    return(
        <div>
            <PassingFunction />
            <Inline />
            <Object />
        </div>
    );
}

export default EventHandler;