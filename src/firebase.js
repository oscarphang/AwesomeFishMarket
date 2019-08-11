import * as firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyBIGGWIArPtNnAIHW6mEfpIYkceCDlmjKw",
    authDomain: "fish-market-9e20a.firebaseapp.com",
    databaseURL: "https://fish-market-9e20a.firebaseio.com",
    projectId: "fish-market-9e20a",
    storageBucket: "fish-market-9e20a.appspot.com",
    messagingSenderId: "216195214226",
    appId: "1:216195214226:web:2437692d864aee29"
}
firebase.initializeApp(config);
firebase.firestore().settings({});

export default firebase;
