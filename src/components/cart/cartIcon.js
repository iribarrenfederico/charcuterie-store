import React, {useState,useEffect} from 'react'
import {Link} from "react-router-dom";
import {Loading,randomKey} from '../../helpers/helpers'

export default function CartIcon({nombre,cart,cartTask,DetallePedido,loading,setLoading}){
let total = cartTask.getCantidadTotal>0?cartTask.getCantidadTotal:""}
