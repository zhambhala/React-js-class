
import React, { useContext } from 'react'
import { Icon } from '@iconify/react';
import  {Link} from "react-router-dom"
import { CartContext } from '../context/CartContext';
export default function CartWidget() {
  const {cartQuantity}= useContext(CartContext)
  return (
    <Link to="/cart">
    <Icon icon="el:shopping-cart-sign" />
    <span>{cartQuantity()}</span>
    </Link>
  )
}

