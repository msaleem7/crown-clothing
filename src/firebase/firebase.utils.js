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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GithubAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
