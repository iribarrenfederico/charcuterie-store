import React, { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'

import Productos from './ItemList'
import {useCartContext} from '../../context/cartContext'
import {Loading} from '../../helpers/helpers'
import {fire} from '../../firebase'
import { listaProductos } from '../values/values'

export default function ItemListContainer() {
 
    const {familia} = useParams()
    const [cart, cartTask] = useCartContext()
    const [listaProductos, SetLstProductos] = useState([])

 useEffect(() => {
    fire.getCollection(listaProductos,"items",familia?{where:["familia","==",familia]}:{})
 },[familia,cart]);

    return (

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
                        listaProductos.length > 0 ?
                            <Productos listaProductos={lstProductos} />
                            :
                            <Loading size="8" space="5" />
                    }
                </div>
            </div>
        </div>

    )
}