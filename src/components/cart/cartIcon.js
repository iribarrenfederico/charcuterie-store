import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { Loading, randomKey } from '../../helpers/helpers'

export default function CartIcon({ nombre, cart, cartTask, DetallePedido, loading, setLoading }) {
    let total = cartTask.getCantidadTotal > 0 ? cartTask.getCantidadTotal : ""
return(
    <div id="pedidos">

        <div id="botoncompra" style={{ display: total == "" ? "" : "" }} >

            <button data-toggle="modal" type="button" className="btn btn-danger btn-lg order_desktop" data-target="#pedido_online" >
                Carrito
              <span id="total_carro_d" className="badge bg-secondary">{total}</span>
            </button>

            <button data-toggle="modal" type="button" className="btn btn-danger btn-lg order_mobile" data-target="#pedido_online" >
                <img src="images/icon/shopping-cart.svg" />
                <span id="total_carro_m" className="badge badge-pill">{total}</span>
            </button>

        </div>
        </div>)}
