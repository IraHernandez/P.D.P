import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA_dYEj52onaISfjkdHajnYfuSU21LTrG4",
    authDomain: "pdp-hackaton.firebaseapp.com",
    projectId: "pdp-hackaton",
    storageBucket: "pdp-hackaton.appspot.com",
    messagingSenderId: "536099027400",
    appId: "1:536099027400:web:f66091138e1ebe9dbe28fd"
  };

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
