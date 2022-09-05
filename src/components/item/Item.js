//import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCount from '../Main/ItemCount';

export default function Item({ producto }) {
    const {nombre,precio,img,desc,stock} = producto;
    const onAdd =(counter,)=>{
        console.log("se agrego al carro", counter, precio*counter, nombre)
    }
    return (
        
        <Card  border="danger"  style={{  width: "18rem" , margin: "5px" }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>
                    $ {precio}
                </Card.Text>
                <Card.Text>
                    {desc}
                </Card.Text>
                <Card.Text>
                    stock disponible: {stock}
                </Card.Text>
                <ItemCount stock={stock} onAdd={onAdd}/>
            </Card.Body>
        </Card>

    )
}
