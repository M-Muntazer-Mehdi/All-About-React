import React from "react";
import Mounting from "./Mounting"
import Updating from "./Updating";
import Unmounting from "./Unmounting";

function Lifecycle(){
    return(
        <div>
        <Mounting />
        <Updating />
        <Unmounting />
        </div>
    );
}

export default Lifecycle;