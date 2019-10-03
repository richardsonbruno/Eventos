import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const verify = JSON.parse(localStorage.getItem("logado")).usuarioLogado !== null ? 1 : 0;

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        { ...rest }
        render={ 
            props => verify > 0 
            ? 
            (<Component {...props} />) 
            : 
            (<Redirect to={{ pathname: "/login", 
                from: props.location }} 
                />) 
        }
    />
);

export default PrivateRoute;
