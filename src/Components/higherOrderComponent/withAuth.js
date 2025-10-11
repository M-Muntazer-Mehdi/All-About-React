import React from "react";
import { Navigate } from "react-router-dom";
import Home from "../Home";

const WithAuth = (WrappedComponent) => {
    return class extends React.Component {
        render() {
            const isAuthenticated = localStorage.getItem('username') === 'Muntazer';

            if(!isAuthenticated) {
                return <Navigate to = {Home} />
            }

            return <WrappedComponent {...this.Props} />
        }
    };
};

export default WithAuth;