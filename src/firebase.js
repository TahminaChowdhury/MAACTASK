import firebase from 'firebase/app';
import 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyAUz02Lt-RuS_2p9iQih8hk1CAai0gijw8',
  authDomain: 'filedx.firebaseapp.com',
  projectId: 'filedx',
  storageBucket: 'filedx.appspot.com',
  messagingSenderId: '923079116383',
  appId: '1:923079116383:web:7eee7ad40922d7e59c7dea',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
