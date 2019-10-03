import React from 'react';
import {Route, Redirect} from 'react-router-dom';

let verify = "";
if(localStorage.getItem("logado") !== null){
    verify = JSON.parse(localStorage.getItem("logado")).usuarioLogado
}

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        { ...rest }
        render={ props => verify > 0 ? (<Component {...props} />) : (<Redirect to={{ pathname: "/login", from: props.location }} />) }
    />
);

export default PrivateRoute;
