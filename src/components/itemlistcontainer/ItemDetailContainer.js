import React, { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'

import {Loading} from '../../helpers/helpers'
import {fire} from '../../firebase'

import ItemDetail from './ItemDetail'
import {InputSpiner} from './ItemList'

import './style.css'
import { ListaProductos } from '../values/values'

export default function ItemDetailContainer() {
 
    const [listaProductos, SetListadoProductos] = useState([])
    const {id} = useParams()

    useEffect(() => {

      fire.getCollection(listaProductos,"items",{doc:id})
 
     },[id]);

  return (<>
    {listaProductos.length > 0 ? <ItemDetail {...listaProductos[0]} botonera={<InputSpiner {...listaProductos[0]} />} /> :
      <Loading size="8" space="5" />}
  </>
  )
}