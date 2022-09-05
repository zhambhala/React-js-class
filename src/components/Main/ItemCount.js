//import Contador from "./Contador";
import { useState, } from "react";
import React from 'react'

function ItemCount({stock, initial=0, onAdd}) {
    const [counter, setCounter] = useState(initial)
    // let counter = 1 no se debe usar esta manera en React
    const handleSumar = () => {
        if (counter < stock) {
            setCounter(counter + 1)
        }
         }
    const handleRestar = () => { if (counter > initial) { setCounter(counter - 1) } }
    return (
        <div>
            
            <div className="m-2">
                <button onClick={handleRestar} className="btn btn-outline-primary">-</button>
                <span className="mx-2">stock: {counter}</span>
                <button onClick={handleSumar} className="btn btn-primary">+</button>
            </div>
            <div className=""><button className="btn btn-primary m-2" disabled={stock <= 0} onClick={()=>onAdd(counter)}>agregar al carrito</button></div>
        </div>
    )
}

export default ItemCount