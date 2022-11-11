import { children, createContext, useEffect, useState } from "react";
import Swal from "sweetalert2"
export const CartContext = createContext()
const init = JSON.parse(localStorage.getItem("carrito")) || []
export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState ([])
  const addToCart = (item) =>{
    setCart ([...cart, item])
  }

  const isInCart  = (id)=>{
    return cart.find((item)=> item.id ===id)
  }

  const cartQuantity =() =>{
    return cart.reduce((acc, item)=> acc + item.cantidad,0)
  }

  const cartTotal =()=>{
    return cart.reduce((acc, item) => acc + item.cantidad * item.precio, 0)
  }

  const emptyCart =()=> {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'El carrito se vacio correctamente',
      showConfirmButton: false,
      timer: 1500
    })
    setCart([])
  }
  const removeItem =(id) => {
    setCart (cart.filter((item) => item.id !== id ))
  }
  useEffect(()=> {
    localStorage.setItem("carrito", JSON.stringify(cart))
  },[cart])
    return(
        <CartContext.Provider value={ {
            cart,
            addToCart,
            isInCart,
            cartQuantity,
            cartTotal,
            emptyCart,
            removeItem
          } }>
            {children}

        </CartContext.Provider>
    )
}