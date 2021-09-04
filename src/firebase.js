import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import getAuth from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDFK9BwxlQGbuPBNMDvKn6FsIIDXPmb5hA",
    authDomain: "react-firebase-auth-4a09f.firebaseapp.com",
    projectId: "react-firebase-auth-4a09f",
    storageBucket: "react-firebase-auth-4a09f.appspot.com",
    messagingSenderId: "1073083934443",
    appId: "1:1073083934443:web:dd3a70f3cc98b024f880ae"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

   const auth  = firebase.auth();
   const googleAuthProvider =  new firebase.auth.GoogleAuthProvider();
   const facebookAuthProvider =  new firebase.auth.FacebookAuthProvider();

  

   export   {auth, googleAuthProvider, facebookAuthProvider,};

