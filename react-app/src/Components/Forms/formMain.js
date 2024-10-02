import React from "react";
import ControlledForm from "./controlledForm";
import UnControlledForm from "./unControlledForm";
import ContactForm from "./handleFormUsingControlled";

function FormMain () {
    return (
        <div>
            <ControlledForm />
            <UnControlledForm />
            <ContactForm />
        </div>
    );
}

export default FormMain;