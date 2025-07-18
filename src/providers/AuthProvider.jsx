import React, { createContext } from 'react';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const authInfo = {
        name: 'Bangladesh is a land of river'
    }
    return (
        
         <AuthContext.Provider value={authInfo}>
           {children}
         </AuthContext.Provider>

    );
};

export default AuthProvider;