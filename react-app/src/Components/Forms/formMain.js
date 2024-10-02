import React from "react";
import ControlledForm from "./controlledForm";
import UnControlledForm from "./unControlledForm";
import HandleFormControlled from "./handleFormUsingControlled";
import HandleFormUncontrolled from "./handleFormUsingUncontrolled";

function FormMain () {
    return (
        <div>
            <ControlledForm />
            <UnControlledForm />
            <HandleFormControlled />
            <HandleFormUncontrolled />
        </div>
    );
}

export default FormMain;