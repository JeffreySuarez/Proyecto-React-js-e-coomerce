import firebase from 'firebase/app'

import 'firebase/firestore';


//configuracion Firebase
var firebaseConfig = {


};

//inicializar Firebase

const fb = firebase.initializeApp(firebaseConfig);

//disponibilidad para todos

export const dataBase = fb.firestore();

