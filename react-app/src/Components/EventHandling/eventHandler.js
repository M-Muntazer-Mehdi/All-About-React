import React from "react";
import PassingFunction from './passingFunctionAsEventHandler';
import Inline from "./inlineEventHandler";
import Object from "./eventObject";
import DefaultBehaviour from "./preventDefaultBehaviour";
import Binding from "./bindingEventHandler";

function EventHandler (){
    return(
        <div>
            <PassingFunction />
            <Inline />
            <Object />
            <DefaultBehaviour />
            <Binding />
        </div>
    );
}

export default EventHandler;