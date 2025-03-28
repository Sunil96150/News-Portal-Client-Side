
import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../components/firebase/firebase.init';



const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    
    const [user , setUser] = useState(null);
    const [loading , setLoading] = useState(true);

 const createUser = (email , password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth , email , password)
 }

 const logInUser = (email , password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth , email , password)
 };


 const logInWithGoogle = () =>{
    setLoading(true)
    return signInWithPopup(auth , googleProvider)
 }

 const logOutUser = () =>{
    setLoading(true)
    return signOut(auth)
 }

 useEffect(() =>{
    const unsubscribe = onAuthStateChanged(auth , currentUser =>{
        setUser(currentUser)
       // console.log('stated captured' , currentUser)
        setLoading(false)
    })
    return () => {
        unsubscribe()
    }
 }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        logInUser,
        logOutUser,
        logInWithGoogle
    }
    return (
        <AuthContext.Provider value ={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;