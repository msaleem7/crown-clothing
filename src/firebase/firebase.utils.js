import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyCKTiJOLJFFY2moptswOWCaGabEWMsnm1M',
  authDomain: 'crown-db-5fde8.firebaseapp.com',
  databaseURL: 'https://crown-db-5fde8.firebaseio.com',
  projectId: 'crown-db-5fde8',
  storageBucket: 'crown-db-5fde8.appspot.com',
  messagingSenderId: '1035717237653',
  appId: '1:1035717237653:web:38678829661e4ebefeb49c',
  measurementId: 'G-BVJZKRQ8V1',
};

export const CreateUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('Unable to create user', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;