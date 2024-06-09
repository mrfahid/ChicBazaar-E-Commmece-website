import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCqDvhzmhDKe9PbXA0ohHRFxZNbswEjXnM",
  authDomain: "chicbazaar-99595.firebaseapp.com",
  projectId: "chicbazaar-99595",
  storageBucket: "chicbazaar-99595.appspot.com",
  messagingSenderId: "349153581322",
  appId: "1:349153581322:web:5d5b198279886b1b8bc2f3",
  measurementId: "G-ZXJLKPGVBD"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const googleProvider = new GoogleAuthProvider();
// const githubProvider = new GithubAuthProvider();

export { auth };
