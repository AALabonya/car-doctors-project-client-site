/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../../firebase/firebase.config";
import axios from "axios";


export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider()
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    //create user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //const userProfile
    const updateUser = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }


    //sign in
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //sign in with google

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    //logOut
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    //observer

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            const userEmail =currentUser?.email || user?.email
            const loggedUser = {email: userEmail}
            console.log("current User", currentUser);
            setLoading(false)
            //jodi user thake tahole token generate korbo
            if(currentUser){
                axios.post("https://car-doctors-server-dun.vercel.app/jwt",loggedUser, {withCredentials:true} )
                .then(res=>{
                    console.log("token response", res.data);
                })
            }else{
                axios.post("https://car-doctors-server-dun.vercel.app/logout" ,loggedUser, {withCredentials:true})
                .then(res=>{
                    console.log(res.data);
                })
            }
           
        })
        return () => {
            unSubscribe()
        }
    }, [user?.email])

    const authInfo = {
        user,
        loading,
        updateUser,
        createUser,
        signIn,
        googleSignIn,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;