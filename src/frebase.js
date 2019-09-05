import firebase from "firebase";

const firebaseApp = firebase.initializeApp({

        apiKey: "AIzaSyD820AGawYOmggTokedE4RCBVgJWBUoFOs",
        authDomain: "demochatapp-a44dc.firebaseapp.com",
        databaseURL: "https://demochatapp-a44dc.firebaseio.com",
        projectId: "demochatapp-a44dc",
        storageBucket: "demochatapp-a44dc.appspot.com",
        messagingSenderId: "912904211085",
        appId: "1:912904211085:web:5aa3d410c106f89b62b0c4"
    
    
});

const db = firebaseApp.firestore();

export { db };