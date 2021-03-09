import firebase from "firebase/app";

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBjGDK2lPghRx6mBNlt5x_lYUpF-Z8R3us",
    authDomain: "therapy-together.firebaseapp.com",
    projectId: "therapy-together",
    storageBucket: "therapy-together.appspot.com",
    messagingSenderId: "436206420132",
    appId: "1:436206420132:web:b6b5e6d9c7e0dbcfd1a631",
    measurementId: "G-95PBPL4JHP"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
} else {
    firebase.app(); // if already initialized, use that one
}

export const addCollectionAndDocument = async (collectionKey, objectsToAdd) => {

    const collectionRef = firestore.collection(collectionKey);
    const batch = firestore.batch();

    objectsToAdd.forEach((obj) => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    })

    return await batch.commit();
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`/users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    // console.log('snapshot',snapShot);
    // console.log('DataSnapshot', snapShot.data())

    if (!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData,
            })
        } catch (err) {
            console.log(error.message);
            console.log('error creating user')
        }
    }

    return userRef;
}

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();

googleProvider.setCustomParameters({
    prompt: 'select_account',
    'display': 'popup'
});

facebookProvider.setCustomParameters({
    'display': 'popup'
});

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
export const signInWithFacebook = () => auth.signInWithPopup(facebookProvider)
export default firebase;