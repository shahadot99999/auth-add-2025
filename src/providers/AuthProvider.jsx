import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase.init';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user, setUser]=useState(null);

    const name = "Bangladesh is a land of river";

    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signOutUser = () =>{
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('current User', currentUser);
            setUser(currentUser);
        })

        return ()=>{
            unSubscribe()}
        
    }, [])

    const authInfo = {
        name,
        user,
        createUser, 
        signInUser,
        signOutUser
    }
    return (
        
         <AuthContext.Provider value={authInfo}>
           {children}
         </AuthContext.Provider>

    );
};

export default AuthProvider;