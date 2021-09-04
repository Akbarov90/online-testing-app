import React from 'react';
import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoadingToRedicret from './LoadingToRedicret';


const UserRoute = ({children,...rest}) => {
    const {currentUser} =  useSelector((state) => state.user);
    return currentUser ? <Route{...rest}/> : <LoadingToRedicret/>
}

export default UserRoute
