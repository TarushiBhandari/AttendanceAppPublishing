import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBVivFUANse2iEYg_j9tGrGb-Aq6u_g9_I",
    authDomain: "project-60-b6ad5.firebaseapp.com",
    databaseURL: "https://project-60-b6ad5-default-rtdb.firebaseio.com",
    projectId: "project-60-b6ad5",
    storageBucket: "project-60-b6ad5.appspot.com",
    messagingSenderId: "1070407400621",
    appId: "1:1070407400621:web:93343fd7dd104dc9b81a24"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.database();