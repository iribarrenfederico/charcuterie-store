import React from 'react';
const ButtonF = ({color,padding,text,suma}) => {
    return(
        suma ?
        <button onClick={()=>suma(4)} style={{backgroundColor:color, color:'white', padding:padding}}>
             {text}
        </button>
        :
        <button style={{backgroundColor:color, color:'white', padding:padding}}>
        {text}
        </button>
    )
}
export default ButtonF