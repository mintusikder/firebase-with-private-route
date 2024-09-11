import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  TwitterAuthProvider,
} from "firebase/auth";
import app from "../firebase.config";
import PropTypes from 'prop-types';
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider()
  const twitterProvider = new TwitterAuthProvider();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  //create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //signIn User
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //googleSignIn
  const google = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  //gitHubSignIn 
  const github = () =>{
    setLoading(true);
    return signInWithPopup(auth, gitHubProvider);
  }
  //twitterSignIn 
  const twitter = () =>{
    setLoading(true);
    return signInWithPopup(auth, gitHubProvider);
  }
  //logOut
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  //state change
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(false);
      console.log("Current user", currentUser)
      setUser(currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);



  const info = {
    user,
    loading,
    createUser,
    signInUser,
    logOut,
    google,
    github,
    twitter
  };
  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
AuthProvider.propTypes={
  children: PropTypes.node
}