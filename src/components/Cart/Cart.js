import { useContext } from "react"
import { CartContext } from "../context/CartContext"

const Cart =()=>{
    const {removeItem,cart, cartTotal,emptyCart} = useContext(CartContext)
    return(
        <div>
            <h2>Tu carrito</h2>
            <div>{cart.map((item)=>
            <div key={item.id}> 
            <h3>{item.nombre}</h3>
            <p>Precio: {item.precio}</p>
            <p>Cantidad:{item.cantidad}</p>
            <button onClick={()=> removeItem(item.id)} className="btn btn-danger mx-2">"X"</button>
            </div>
            )}</div>

            <h4>Total: ${cartTotal()}</h4>
            <button onClick={emptyCart} className="btn btn-danger">Vaciar carrito</button>
        </div>
    )
}
export default Cart