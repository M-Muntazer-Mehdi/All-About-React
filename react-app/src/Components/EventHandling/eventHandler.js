import React from "react";
import PassingFunction from './passingFunctionAsEventHandler';
import Inline from "./inlineEventHandler";
import Object from "./eventObject";
import DefaultBehaviour from "./preventDefaultBehaviour";
import Binding from "./bindingEventHandler";
import Multiple from "./multipleEvent";

function EventHandler (){
    return(
        <div>
            <PassingFunction />
            <Inline />
            <Object />
            <DefaultBehaviour />
            <Binding />
            <Multiple />
        </div>
    );
}

export default EventHandler;