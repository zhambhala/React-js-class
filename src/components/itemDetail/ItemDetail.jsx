import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ItemCount from '../Main/ItemCount';
function ItemDetail({item}) {
    const {img, nombre, desc, precio, stock, category} = item;
    const onAdd =(counter,)=>{
        console.log("se agrego al carro", counter, precio*counter, nombre)
    }
  return (
    <div>
        <Card style={{ width: '48rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>
          {desc}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>${precio}</ListGroup.Item>
        <ListGroup.Item>{stock}</ListGroup.Item>
        <ListGroup.Item>categoria: {category}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
      <ItemCount stock={stock} onAdd={onAdd}/>
      </Card.Body>
    </Card>
    </div>
  )
}

export default ItemDetail