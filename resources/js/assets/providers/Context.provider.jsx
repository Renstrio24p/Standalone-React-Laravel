import React, { createContext, useContext } from "react";

const StateContext = createContext({
    User: null,
    authToken: null
    // Authentication Token Context
})

export const ContextProvider = ({children}) => {
    const [User,setUser] = React.useState({});
    const [Token,_setToken] = React.useState(localStorage.getItem('Access_Token'));

    const setToken = (Token) => {
        // Will accept the token authentication to users
        _setToken(Token)
        {Token ? 
            localStorage.setItem('Access_Token',Token) :
            localStorage.removeItem('Access_Token')
            // If the Token does exist it will set the access_token in the local storage.
        }
    }
    
    return (
        <StateContext.Provider value={{
            User,
            Token,
            setUser: ()=>{},
            setToken: ()=>{}

            // these are props that handles authentication needed for accessing the data.
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);