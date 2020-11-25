import firebase from "firebase";

const ENV_VAR = process.env;

console.log(ENV_VAR.REACT_APP_FIREBASE_API_KEY);
const firebaseApp = firebase.initializeApp({
  apiKey: ENV_VAR.REACT_APP_FIREBASE_API_KEY,
  authDomain: ENV_VAR.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: ENV_VAR.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: ENV_VAR.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: ENV_VAR.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: ENV_VAR.REACT_APP_FIREBASE_MESSAGING_SENDER,
  appId: ENV_VAR.REACT_APP_FIREBASE_APP_ID,
});

const db = firebaseApp.firestore();

export default db;
