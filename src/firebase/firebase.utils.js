import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
    apiKey: "AIzaSyCAF-rAapyOCYTGvsbACt6meB3EvtrZ9S0",
    authDomain: "crwn-db-62ede.firebaseapp.com",
    projectId: "crwn-db-62ede",
    storageBucket: "crwn-db-62ede.appspot.com",
    messagingSenderId: "29629983484",
    appId: "1:29629983484:web:3ddf71054d33a9c006c579",
    measurementId: "G-3CCK93FEK1"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
