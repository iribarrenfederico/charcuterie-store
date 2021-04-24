import React from 'react'
import Item from './Item'

const ItemList = () => {
    return (
        <div>
            <div className="grilla--productos">
                <Item
                img="../assets/images/jamon.jpg"
                description="Jamón serrano"
                id='123abc'
                title='Jamón Hibérico'
                price='700'
                />
                <Item
                img="../assets/images/aceitunas.jpg"
                description="Aceitunas Verdes"
                id='456def'
                title='Olivos'
                price='300'
                />
            </div>
        </div>
    )
}
export default ItemList