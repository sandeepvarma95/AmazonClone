import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDzLkGwRYflyv71G_6tnrVoqoh2bn7TNKI",
  authDomain: "clone-database-8ef7e.firebaseapp.com",
  projectId: "clone-database-8ef7e",
  storageBucket: "clone-database-8ef7e.appspot.com",
  messagingSenderId: "975275925125",
  appId: "1:975275925125:web:200ba31cd8fa3483abd3ec",
  measurementId: "G-SNBR0RYFB2"
});

const db = firebase.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider }