import React, { useState, useEffect,useContext } from 'react'
import {useParams} from 'react-router-dom'

import Productos from './ItemList'
import {Loading} from '../../helpers/helpers'
import  {useCartContext} from '../../context/cartContext'
import db from '../../firebase/index'

import './style.css'

export default function ItemListContainer({listado}) {
 
    const [ListadoProductos, SetListadoProductos] = useState([])
    const {familia} = useParams()

 useEffect(() => {
         db.collection("items").get().then( (querySnapshot) => {
            let salida = []
            querySnapshot.forEach((doc) => {
              salida.push({...doc.data(), id: doc.id})
          })
              SetListadoProductos(salida)
          }
      )
 },[familia]);


 useEffect(() => {
  familia && (
         db.collection("items").where("familia","==",familia).get()
         .then( (querySnapshot) => {
            let salida = []
            querySnapshot.forEach((doc) => {
              salida.push({...doc.data(), id: doc.id})
          })
              SetListadoProductos(salida)
          }
      )
)


 },[familia]);

 return(
    
    <div className="row justify-content-center py-3 mw-100">  
        <div className="col-12 pb-4">
            <h1>Our Philosophy is a simple one.</h1>
        </div>
        <div className="col-10">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <section className="pt-1 mt-3 mx-3">
                            <p className="pb-2">At Tempus we only use ex-breeding sows and ex-dairy beef in our charcuterie.</p>
                            <p>This ethos is also part of our commitment to utilising the food-chain correctly.</p>
                        </section>
                    </div>
                </div>

                {
                  ListadoProductos.length > 0 ? 
                  <Productos listaProductos = {ListadoProductos}/>
                    :
                  <Loading size="8" space="5"/>
                }
             </div>
        </div>             
    </div>

 )  
}