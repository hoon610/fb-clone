import firebase from 'firebase/compat/app'; // Import Firebase using compat
import 'firebase/compat/auth'; // Import the Firebase services you need using compat
import 'firebase/compat/firestore';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAm86xnostTa8ZskL4NT-2stZD33Au_9-U",
    authDomain: "facebook-clone-e6df9.firebaseapp.com",
    projectId: "facebook-clone-e6df9",
    storageBucket: "facebook-clone-e6df9.appspot.com",
    messagingSenderId: "459541541813",
    appId: "1:459541541813:web:07c184bf5faa53de8b9ffc",
    measurementId: "G-H9BRTSTB6G"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;