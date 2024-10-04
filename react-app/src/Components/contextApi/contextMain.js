import React from "react";
import AuthStatus from "./useContext1";
import AuthComponent from "./useContext2";
import { AuthProvider } from "./authContext";

function ContextApi ()
{
    return(
        <AuthProvider>
            <div>
                <AuthStatus />
                <AuthComponent />
            </div>
        </AuthProvider>
    );
}

export default ContextApi;