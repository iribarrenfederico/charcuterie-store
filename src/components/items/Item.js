import React from 'react'
import jamon from '../../assets/images/jamon.jpg'
import '../../index.css'

const Item = ({id, price, title, description,img}) => {
    return (
    
    
        <div className="tarjeta">
            <div className="product--info">
                <p>{title}</p>
                <p className="product--price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <p>{id}</p>
            </div>

            <img src={jamon} alt="*" width="400px"></img>
            <button>Agrega al carrito</button>
            <p className="product--info">{description}</p>

            </div>
    )
    }
export default Item