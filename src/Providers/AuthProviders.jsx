import { createContext, useEffect, useState } from "react";
import {  GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
const auth = getAuth(app);
export const AuthContext = createContext ();
const googleProvider = new GoogleAuthProvider();


const AuthProviders = ({children}) => {

    const [user,setUser] = useState (null);
    const [loading,setLoading] = useState (true);

    const createUser = (email,password) => {
        setLoading (true)
        return createUserWithEmailAndPassword (auth,email,password)
    }

    const signIn = (email,password) => {
        setLoading (true)
        return signInWithEmailAndPassword (auth,email,password)
    }

    // logout

    const logout = () => {
        setLoading (true)
        return signOut (auth);
    }

    // google login

    const googleLogin = () => {
        setLoading (true)
        return signInWithPopup (auth,googleProvider);
    }

    useEffect ( () => {
        const unSubscribe = onAuthStateChanged (auth, currentUser => {
            setUser (currentUser);
            console.log ('current user',currentUser);
            setLoading (false)
        });
        return () => {
            return unSubscribe ();
        }
    } ,[])
    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logout,
        googleLogin

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;