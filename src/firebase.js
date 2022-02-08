
import  firebase from "firebase"
import "firebase/auth"

// Other libraries might need to also be prefixed with "compat":

// import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3GoBRG2gytQ0Mow7j9Mwdv95ZK1ak6bE",
  authDomain: "healthfix-46d32.firebaseapp.com",
  projectId: "healthfix-46d32",
  storageBucket: "healthfix-46d32.appspot.com",
  messagingSenderId: "494413256905",
  appId: "1:494413256905:web:c4f5e6fdefae5f705b9518"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = firebase.firestore(app);
// export const db = getFirestore(app);
// export const db =getFirestore(app);

export const auth = app.auth();



