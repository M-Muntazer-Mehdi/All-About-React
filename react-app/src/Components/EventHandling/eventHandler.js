import React from "react";
import PassingFunction from './passingFunctionAsEventHandler';
import Inline from "./inlineEventHandler";
import Object from "./eventObject";
import DefaultBehaviour from "./preventDefaultBehaviour";

function EventHandler (){
    return(
        <div>
            <PassingFunction />
            <Inline />
            <Object />
            <DefaultBehaviour />
        </div>
    );
}

export default EventHandler;