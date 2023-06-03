import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../../../providers/Context.Provider";

export default function Defaults(){
    const {User,Token} = useStateContext()

    if(!Token){
        // Verify if the user is Authenticated
        return <Navigate to="/login" />
    }

    return (
        <div>

            <Outlet />
        </div>
    )
}