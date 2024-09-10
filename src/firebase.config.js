// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0gcMb5s9WjLlbBAZfBeYYPOl3ZB9coiA",
  authDomain: "glasses-authentication-c4e54.firebaseapp.com",
  projectId: "glasses-authentication-c4e54",
  storageBucket: "glasses-authentication-c4e54.appspot.com",
  messagingSenderId: "530826634623",
  appId: "1:530826634623:web:efad43fa00b2d58a87a64a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app