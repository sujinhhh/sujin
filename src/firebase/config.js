import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlyv9_qXdUGzIbQ3n4ZExrTJpp-LuRLas",
  authDomain: "dream-f5a51.firebaseapp.com",
  projectId: "dream-f5a51",
  storageBucket: "dream-f5a51.appspot.com",
  messagingSenderId: "6374434058",
  appId: "1:6374434058:web:4609d2954a91f7a66ec6f3",
  measurementId: "G-KK0JVNT17M",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
