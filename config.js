import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyBOefZ2UCs4XjOP2fzlbUeeqt8h58yReq4",
    authDomain: "project-71-5e0b8.firebaseapp.com",
    projectId: "project-71-5e0b8",
    storageBucket: "project-71-5e0b8.appspot.com",
    messagingSenderId: "716125058296",
    appId: "1:716125058296:web:087313ab9c543e4891b70d"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
