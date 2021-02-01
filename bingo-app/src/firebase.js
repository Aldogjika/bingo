import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDiBqerCBl9UY_Yd2TehTmdHCxMDI9UnDY",
  authDomain: "bingo-fb2fa.firebaseapp.com",
  projectId: "bingo-fb2fa",
  storageBucket: "bingo-fb2fa.appspot.com",
  messagingSenderId: "616128286448",
  appId: "1:616128286448:web:70b359d23ee09a2509fc35",
  measurementId: "G-2T7SDFMKDW",
});

const db = firebaseApp.firestore();

export default db;
