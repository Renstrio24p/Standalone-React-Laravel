import { Navigate, createBrowserRouter } from "react-router-dom";
import Login from "../views/components/Auth/Login";
import SignUp from '../views/components/Auth/SignUp';
import Users from '../views/components/Auth/Users';
import Defaults from '../views/components/Layouts/Default';
import Guest from '../views/components/Layouts/Guest';
import NotFound from '../views/components/Auth/NotFound';
import ReactApp from "../views/react-18/react";
import Dashboard from "../views/components/Auth/Dashboard";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Defaults />,
        children: [
            {
                path: '/',
                element: <Navigate to="/react" />
            },
            {
                path: '/users',
                element: <Users />
            },
            {
                path: '/dashboard',
                element: <Dashboard />
            },
        ]
    },
    {
        path: '/',
        element: <Guest />,
        children: [
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <SignUp />
            }
        ]
    },
    {
        path: '*',
        element: <NotFound />
    },
    {
        path: '/react',
        element: <ReactApp />
        // Standalone-React Page
    }
]);

export default router;

// React Router v6 

/*
 const const router = createBrowserRouter ([
    {
        path: '\',
        element: <test />
    }
 ])
*/

// React Router v5 

/*
 const const router = createBrowserRouter ( routes:[
    {
        path: '\',
        element: <test />
    }
 ])
*/
