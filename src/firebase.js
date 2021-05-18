import firebase from 'firebase/app'
import 'firebase/firestore'
//import 'firebase/auth'

import {ListaProductos} from './components/values/values'


var firebaseConfig = {
  apiKey: "AIzaSyB0DNS_euYJaM10akcbmF3wfE_Sfiazq3s",
  authDomain: "templefoods-5b990.firebaseapp.com",
  projectId: "templefoods-5b990",
  storageBucket: "templefoods-5b990.appspot.com",
  messagingSenderId: "568526704107",
  appId: "1:568526704107:web:afc0a01f39b6d1bf241dae",
  measurementId: "G-ZME2F1M0CD"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();



export const setFireCollection = (collecion, listado) => {
  listado.map(prod => {

    db.collection(collecion).doc(prod.codigo).set(prod)
      .then((docRef) => {
     
      console.log("Document written with ID: ", docRef.id)
    })
    .catch((error) => {

      console.error("Error adding document: ", error)

    })
  })
}



export const gettFireCollection = (callback, collecion) => {
    db.collection(collecion).get().then(callback)
};


db.collection("items").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log("nada", doc.data());
    });
});