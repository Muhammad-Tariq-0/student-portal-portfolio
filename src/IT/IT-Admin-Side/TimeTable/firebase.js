import firebase from 'firebase';

const firebaseConfig = {
  // projectId: 'frb-upl-dwnld-9b5d0',
  // appId: '1:179827629046:web:1d463a4eb79bc8983505d7',
  // databaseURL: 'https://frb-upl-dwnld-9b5d0-default-rtdb.firebaseio.com',
  // storageBucket: 'frb-upl-dwnld-9b5d0.appspot.com',
  // locationId: 'us-central',
  // apiKey: 'AIzaSyDoHodG2NNPFGzJP6cxe6arcL6lZtqaOPo',
  // authDomain: 'frb-upl-dwnld-9b5d0.firebaseapp.com',
  // messagingSenderId: '179827629046'

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
