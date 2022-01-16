import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCFjHhJsZG3zdI54BFOg_chG-fqU8YVD9Y",
    authDomain: "snapshot-clone-db00f.firebaseapp.com",
    projectId: "snapshot-clone-db00f",
    storageBucket: "snapshot-clone-db00f.appspot.com",
    messagingSenderId: "873005503111",
    appId: "1:873005503111:web:cb5b669f0f6589e96d9e22",
    measurementId: "G-4NGW7BJ2TS"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();


export { db, auth, provider, storage };