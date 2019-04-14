import firebase from 'firebase';

// Api details 
  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyBP173lxoDG0Et2fQMC_z3ty6aPpKIgXG8",
    authDomain: "squaaadgoals-d600f.firebaseapp.com",
    databaseURL: "https://squaaadgoals-d600f.firebaseio.com",
    projectId: "squaaadgoals-d600f",
    storageBucket: "squaaadgoals-d600f.appspot.com",
    messagingSenderId: "510592357117"
  };

firebase.initializeApp(config)

export const f = firebase;
export const database = firbase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();