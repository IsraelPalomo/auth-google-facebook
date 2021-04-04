import firebase from "firebase/app";

import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyDaXpQMSSUqNj95VoiD4KThVBggN2VnLTI",
	authDomain: "au--facebook.firebaseapp.com",
	projectId: "au--facebook",
	storageBucket: "au--facebook.appspot.com",
	messagingSenderId: "57268053100",
	appId: "1:57268053100:web:c1b2fb621522260824a449",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { firebase, db, auth, storage };
