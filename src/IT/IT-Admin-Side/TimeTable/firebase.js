import firebase from 'firebase';

const firebaseConfig = {
  projectId: "uot-test",
  appId: "1:25003520162:web:178a4afc22e40b1e21e7fb",
  databaseURL: "https://uot-test-default-rtdb.firebaseio.com",
  storageBucket: "uot-test.appspot.com",
  locationId: "asia-south1",
  apiKey: "AIzaSyCA2g1fKtgwuLvLqMYSFHsET4YYvOkZy8E",
  authDomain: "uot-test.firebaseapp.com",
  messagingSenderId: "25003520162"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
