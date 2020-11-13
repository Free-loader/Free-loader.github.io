import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseApp = firebase.initializeApp({
  // apiKey: process.env.REACT_APP_API_KEY,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // databaseURL: process.env.REACT_APP_DB_URL,
  // projectId: process.env.REACT_APP_P_ID,
  // storageBucket: process.env.REACT_APP_STORAGE,
  // messagingSenderId: process.env.REACT_APP_MSG_ID,
  // appId: process.env.REACT_APP_APP_ID
  apiKey: 'AIzaSyDIAzfqQvU5SpRicja5TnT2-TbIkNvRMLI',
  authDomain: 'freeloader-7e80c.firebaseapp.com',
  databaseURL: 'https://freeloader-7e80c.firebaseio.com',
  projectId: 'freeloader-7e80c',
  storageBucket: 'freeloader-7e80c.appspot.com',
  messagingSenderId: '926392574991',
  appId: '1:926392574991:web:fc6b91e870a38e90e92f7a'
});

const db = firebaseApp.firestore();

export { db };
