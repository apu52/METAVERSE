import React from 'react';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({children}) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if(user){
        return <Navigate to={"/"}/>;
        } else {
        return children;
    }
}

export default PublicRoute