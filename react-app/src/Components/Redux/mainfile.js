import React from "react";
import Plainredux from "./plainRedux";
import ReduxThunk from "./thunkRedux";
import RKTRedux from "./rktRedux";

function MainFile (){
    return(
        <div>
            <Plainredux />
            <ReduxThunk />
            <RKTRedux />
        </div>
    );
}

export default MainFile;