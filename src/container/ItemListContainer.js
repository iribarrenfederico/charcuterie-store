import React, { useState, useEffect } from 'react';
import ItemList from '../components/items/ItemList'



const ItemListContainer = () => {

    const [arrayItems, setArrayItems] = useState([])
    useEffect(()=>{

    },[])

 const productos= [
     {
         img: "../assets/images/jamon.jpg",
         description:"Jamón serrano",
         id:'123abc',
         title:'Jamón Hibérico',
         price:'700',

    },{
                img="../assets/images/aceitunas.jpg",
                description:"Aceitunas Verdes",
                id:'456def',
                title:'Olivos',
                price:'300',
    }
]

const listado = new Promise ((resolve,reject)=> {
setTimeout(()=>{
    resolve(productos)
},2000)
 } )

listado.then((res)=> {
    setArrayItems(res)
})
.catch(()=>{
    console.log("Hubo problemas al cargar")
})
.finally(()=>{
    console.log('El control ha finalizado')
})



return(
   <ItemList />
)
}
export default ItemListContainer