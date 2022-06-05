
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBdQvUo4v_K9EgF0GFqffg9SP6RoG2efa0",
  authDomain: "prestago-9fec0.firebaseapp.com",
  projectId: "prestago-9fec0",
  storageBucket: "prestago-9fec0.appspot.com",
  messagingSenderId: "353270685657",
  appId: "1:353270685657:web:dd7b1ab623794987a383c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export{
    app
}