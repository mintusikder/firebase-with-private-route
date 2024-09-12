import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  TwitterAuthProvider,
  updateProfile,
} from "firebase/auth";
import app from "../firebase.config";
import PropTypes from "prop-types";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();
  const twitterProvider = new TwitterAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  //create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //update user profile

  const updateUserProfile = (name) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: "https://example.com/jane-q-user/profile.jpg"
    });
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
  const github = () => {
    setLoading(true);
    return signInWithPopup(auth, gitHubProvider);
  };
  //twitterSignIn
  const twitter = () => {
    setLoading(true);
    return signInWithPopup(auth, twitterProvider);
  };
  //facebook
  const facebook = () => {
    setLoading(true);
    return signInWithPopup(auth, facebookProvider);
  };
  //logOut
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  //state change
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(false);
      console.log("Current user", currentUser);
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
    twitter,
    facebook,
    updateUserProfile,
  };
  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
AuthProvider.propTypes = {
  children: PropTypes.node,
};
