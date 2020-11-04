import React from 'react';
import { Route, Redirect} from 'react-router-dom';
import { DefaultLayout } from '../../layouts/DefaultLayout';
// (we are assuming that the user logged in is true or user has logged in)
const isAuth = true;     
// const isAuth = false;
export const PrivateRoute = ({ children, ...rest}) => {
return(
    <Route 
    {...rest}
    render= {()=> (isAuth ? <DefaultLayout>{children}</DefaultLayout> : <Redirect to="/" />)}
    />);
    
};


