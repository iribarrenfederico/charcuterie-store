import firebase from 'firebase/app';
import 'firebase/firestore';



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
//firebase.analytics();


export const db = firebase.firestore();

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
export const getFireCollection = (opt) => {
  /*opt = { 
           callback: callback Function,
           collection:"name of collection",
           where:{where:"familia",condition:"==",value:"milanesas"}
           sort:{key:"orden",order:"asc"}
         }*/
   let fireGet = db.collection(opt.collection);
   let query =  opt.where ? fireGet.where( opt.where.where , opt.where.condition , opt.where.value) : fireGet
   let order =  opt.sort  ? query.orderBy( opt.sort.key    , opt.sort.order )                       : query
   order.get().then( querySnapshot  => {
       opt.callback( querySnapshot.docs.map( i => i.data() ) )
   })
   .catch( error => {console.error("Error geting documents: ", error) })
 };
 
 /*export const setFireCollection = (collectionName, array,id) => {
  let fire = db.collection(collectionName)
  array.forEach(item => 
    { item[id]? 
        fire.doc(item[id]).set(item)  
          :  
        fire.add(item)
      .then ( docRef => {console.log   ("Document written with ID: ", docRef.id) })
      .catch( error  => {console.error ("Error adding document: "   , error    ) })
    }
  )
}
*/

export default db