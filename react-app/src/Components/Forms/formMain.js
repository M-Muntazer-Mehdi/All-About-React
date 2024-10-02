import React from "react";
import ControlledForm from "./controlledForm";
import UnControlledForm from "./unControlledForm";

function FormMain () {
    return (
        <div>
            <ControlledForm />
            <UnControlledForm />
        </div>
    );
}

export default FormMain;