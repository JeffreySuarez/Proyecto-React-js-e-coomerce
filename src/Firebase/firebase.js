import firebase from 'firebase/app'

import 'firebase/firestore';


//configuracion Firebase
var firebaseConfig = firebase.initializeApp( {
  apiKey: "AIzaSyBtEZZ8mvIZ8u932QrzMvqDUJMx8winuCY",
  authDomain: "react-e-commerce-43cac.firebaseapp.com",
  projectId: "react-e-commerce-43cac",
  storageBucket: "react-e-commerce-43cac.appspot.com",
  messagingSenderId: "362696958873",
  appId: "1:362696958873:web:9c1cec49582a89e206a908"


});

//inicializar Firebase

// const fb = firebase.initializeApp(firebaseConfig);

export function getFirebase() {
  return firebaseConfig

}

export function getFirestore(){
  return firebase.firestore(firebaseConfig);
}

//disponibilidad para todos

// export const dataBase = fb.firestore();



