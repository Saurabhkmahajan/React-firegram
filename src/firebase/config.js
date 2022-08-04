import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyB8CJRUmwKhwlhUlDyGc7fT9IFmwWVDyFM",
  authDomain: "ninja-firegram-cc26d.firebaseapp.com",
  projectId: "ninja-firegram-cc26d",
  storageBucket: "ninja-firegram-cc26d.appspot.com",
  messagingSenderId: "833583015449",
  appId: "1:833583015449:web:1230f40bb72efd058d6c88"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };