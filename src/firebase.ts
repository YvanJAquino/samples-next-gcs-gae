// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6hv26U2KTCFK36aAAwa841x2wkr5MANY",
  authDomain: "wd-firebase-1.firebaseapp.com",
  projectId: "wd-firebase-1",
  storageBucket: "wd-firebase-1.appspot.com",
  messagingSenderId: "367382458312",
  appId: "1:367382458312:web:61bec6d712d3e277db9afd",
  measurementId: "G-DZGHH9LTZP"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const fsdb = getFirestore(app);
const gcs = getStorage(app);

// Export Firebase objects

export {
    app,
    auth,
    fsdb,
    gcs
}