import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAxCF33Nny6vKadGEKON5BhvNExu1Hzwzw",
  authDomain: "snapchat-clone-bbc7c.firebaseapp.com",
  projectId: "snapchat-clone-bbc7c",
  storageBucket: "snapchat-clone-bbc7c.appspot.com",
  messagingSenderId: "1026823140243",
  appId: "1:1026823140243:web:568eb9821c2ada732e2e66",
  measurementId: "G-71QE7JCJ05"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };