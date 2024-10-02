import React from "react";
import PassingFunction from './passingFunctionAsEventHandler';
import Inline from "./inlineEventHandler";
import Object from "./eventObject";
import DefaultBehaviour from "./preventDefaultBehaviour";
import Binding from "./bindingEventHandler";
import Multiple from "./multipleEvent";
import Arguments from "./passingMultipleArgument";

function EventHandler (){
    return(
        <div>
            <PassingFunction />
            <Inline />
            <Object />
            <DefaultBehaviour />
            <Binding />
            <Multiple />
            <Arguments />
        </div>
    );
}

export default EventHandler;