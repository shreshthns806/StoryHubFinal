import * as firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyCsqoO5cLTiD1kXXGxangT82_sCwYWkOgw",
    authDomain: "storyhub-7a9df.firebaseapp.com",
    databaseURL: "https://storyhub-7a9df.firebaseio.com",
    projectId: "storyhub-7a9df",
    storageBucket: "storyhub-7a9df.appspot.com",
    messagingSenderId: "147723960699",
    appId: "1:147723960699:web:914d5c5906312362fafdde"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();