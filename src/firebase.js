import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAL0K6P5K-IgM3vdUzZStOp4jejl9TK6kg",
    authDomain: "clone-a6366.firebaseapp.com",
    projectId: "clone-a6366",
    storageBucket: "clone-a6366.appspot.com",
    messagingSenderId: "1052854151984",
    appId: "1:1052854151984:web:c49f8935721d05923ff6f5",
    measurementId: "G-PMTENN94RF"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};
