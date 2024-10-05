import React from "react";
import { Redirect } from "react-router-dom";

const WithAuth = (WrappedComponent) => {
    return class extends React.Component {
        render() {
            const isAuthenticated = localStorage.getItem('username') === 'Muntazer';

            if(!isAuthenticated) {
                return <Redirect to = "" />
            }

            return <WrappedComponent {...this.Props} />
        }
    };
};

export default WithAuth;