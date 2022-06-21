
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBn8-Pxs1c1zmb2NvGMjlWPexVI57VR3A0",
  authDomain: "prestago-69caa.firebaseapp.com",
  projectId: "prestago-69caa",
  storageBucket: "prestago-69caa.appspot.com",
  messagingSenderId: "674622002979",
  appId: "1:674622002979:web:7800eaed6b1da97f63de96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();
const auth  = getAuth(app)
export{
    app,
    google,
    auth
}