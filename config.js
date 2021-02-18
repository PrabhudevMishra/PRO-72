import firebase from 'firebase'
require("@firebase/firestore")
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDNTvXhtlBGiSkSqQ15SntZKIebm4UPhMs",
  authDomain: "storyhub-d32ea.firebaseapp.com",
  projectId: "storyhub-d32ea",
  storageBucket: "storyhub-d32ea.appspot.com",
  messagingSenderId: "725338823512",
  appId: "1:725338823512:web:65952f4e0517103ccca32d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
