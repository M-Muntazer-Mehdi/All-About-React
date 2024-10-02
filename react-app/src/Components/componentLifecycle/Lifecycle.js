import React from "react";
import Mounting from "./Mounting"
import Updating from "./Updating";
import Unmounting from "./Unmounting";
import DataFetchingComponent from "./useEffect";

function Lifecycle(){
    return(
        <div>
        <Mounting />
        <Updating />
        <Unmounting />
        <DataFetchingComponent />
        </div>
    );
}

export default Lifecycle;