// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMTn6s3YN8fnQQja2AkV3xBFjfiqB_H2Q",
  authDomain: "twitter-clone-5d9aa.firebaseapp.com",
  databaseURL: "https://twitter-clone-5d9aa.firebaseio.com",
  projectId: "twitter-clone-5d9aa",
  storageBucket: "twitter-clone-5d9aa.appspot.com",
  messagingSenderId: "654333901228",
  appId: "1:654333901228:web:0f45a1896ec45ba37ee209",
  measurementId: "G-H9R28E43KP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const analytics = getAnalytics(app);

export { app, db };
