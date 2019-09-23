import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCSuVgloJ6QjTwR1wsBF1IuamWO2YPynC0",
  authDomain: "crown-clothing-db-17061.firebaseapp.com",
  databaseURL: "https://crown-clothing-db-17061.firebaseio.com",
  projectId: "crown-clothing-db-17061",
  storageBucket: "",
  messagingSenderId: "147530876745",
  appId: "1:147530876745:web:9b017f844b07f993d03c98"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
