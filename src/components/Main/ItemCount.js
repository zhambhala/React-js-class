//import Contador from "./Contador";
import { useState } from "react";

const ItemCount = (stock, initial, onAdd) => {

    const [counter, setCounter] = useState(0)
    // let counter = 1 no se debe usar esta manera en React
    const handleSumar = () => { setCounter(counter + 1) }
    const handleRestar = () => { if (counter > 1) { setCounter(counter - 1) } }


    return (
        <div>
            <div ><h3 className="card-text m-2">Producto</h3></div>
            <div className="m-2">
                <button onClick={handleRestar} className="btn btn-outline-primary">-</button>
                <span className="mx-2">{counter}</span>
                <button onClick={handleSumar} className="btn btn-primary">+</button>
            </div>
            <div className=""><button className="btn btn-primary m-2">agregar al carrito</button></div>
        </div>
    )
}
export default ItemCount()