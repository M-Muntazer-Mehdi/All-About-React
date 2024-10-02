import React from "react";
import PassingFunction from './passingFunctionAsEventHandler';
import Inline from "./inlineEventHandler";

function EventHandler (){
    return(
        <div>
            <PassingFunction />
            <Inline />
        </div>
    );
}

export default EventHandler;