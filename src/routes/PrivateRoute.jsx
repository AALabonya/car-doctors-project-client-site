import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


const PrivateRoute = ({children}) => {
    const {user , loading} =useContext(AuthContext)

    const location = useLocation()

    if(loading){
        return <progress className="progress w-56"></progress>
    }
       
    if(user?.email){
        return children
    }
    return <Navigate state={location.pathname} to="/login"  replace></Navigate>
};

export default PrivateRoute;