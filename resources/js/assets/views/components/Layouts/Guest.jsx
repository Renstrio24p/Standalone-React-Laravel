import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../../../providers/Context.Provider";

export default function Guest(){
    const {Token} = useStateContext()

    if(Token){
        // Verify if the user is Authenticated
        return <Navigate to="/" />
    }
    return (
        <div>
            <h1>Test</h1>
            <Outlet />
        </div>
    )
}