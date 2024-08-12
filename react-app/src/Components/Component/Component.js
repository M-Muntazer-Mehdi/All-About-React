import React from "react";
import FunctionComponent from "./functionBeforeHooks";
import ClassComponent from "./classBeforeHooks";
import FunctionAfterHooks from "./functionAfterHooks";
import ClassAfterHooks from "./classAfterHooks";

function Component() {
    return(
    <div>
        <FunctionComponent name = "muntazer" />
        <ClassComponent name = "munatazer" />
        <FunctionAfterHooks />
        <ClassAfterHooks />
    </div>
    );
}

export default Component;