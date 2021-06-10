import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import ItemDetail from './ItemDetail'
import { Loading } from '../../helpers/helpers'
import { InputSpiner } from './ItemList'
import db, { getFirestore } from '../../firebase'

import './style.css'

export default function ItemDetailContainer({ listado }) {

  const [ListadoProductos, SetListadoProductos] = useState([])
  const { id } = useParams()

  useEffect(() => {
    db.collection("items").doc(id).get().then((querySnapshot) => {
      let salida = []
      salida.push({ ...querySnapshot.data(), id: querySnapshot.id })
      SetListadoProductos(salida)
    }
    )
  }, [id])
  return (<>
    {ListadoProductos.length > 0 ? <ItemDetail {...ListadoProductos[0]} botonera={<InputSpiner {...ListadoProductos[0]} />} /> :
      <Loading size="8" space="5" />}
  </>
  )
}