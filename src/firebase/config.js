import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDf83y3itW4go6L_LoLjGnh3jQO3TofILQ",
  authDomain: "mymoney-6c3fe.firebaseapp.com",
  projectId: "mymoney-6c3fe",
  storageBucket: "mymoney-6c3fe.appspot.com",
  messagingSenderId: "301070465954",
  appId: "1:301070465954:web:dacb3e2fea6803bd9bd0fb",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init servie
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
