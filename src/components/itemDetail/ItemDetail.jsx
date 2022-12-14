import { useContext } from 'react';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { CartContext } from '../context/CartContext';
import ItemCount from '../Main/ItemCount';
import {Link} from "react-router-dom"
function ItemDetail({item}) {
  const {cart, addToCart, isInCart} = useContext (CartContext)
    const handleAgregar =() =>{
      const itemToCart ={
        id: item.id,
        precio: item.precio,
        nombre: item.nombre,
        cantidad
      }
      addToCart(itemToCart)
    }
    
    //const {img, nombre, desc, precio, stock, category} = item;
    const onAdd =(counter,)=>{}
    const [cantidad, setCantidad] = useState(1)
  return (
    <div>
        <Card style={{ width: '48rem' }}>
      <Card.Img variant="top" src={item.img} />
      <Card.Body>
        <Card.Title>{item.nombre}</Card.Title>
        <Card.Text>
          {item.desc}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>${item.precio}</ListGroup.Item>
        <ListGroup.Item>{item.stock}</ListGroup.Item>
        <ListGroup.Item>categoria: {item.category}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        {
          isInCart(item.id)
          ? <Link to="/cart" className="btn btn-success my-2"> Terminar Compra</Link>
          :<ItemCount stock={item.stock} 
          counting={cantidad} 
          setCantidad={setCantidad}
          handleAgregar={handleAgregar}
          
          />
        }
      </Card.Body>
    </Card>
    </div>
  )
}

export default ItemDetail