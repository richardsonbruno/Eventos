import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        { ...rest }
        render={ 
            props => 1 > 0 
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
