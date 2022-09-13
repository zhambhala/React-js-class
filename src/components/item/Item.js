//import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
export default function Item({ producto }) {
    const {nombre,precio,img,desc,stock} = producto;

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
                <Link to={`/item/${producto.id}`} className="btn btn-primary">ver mas</Link>
            </Card.Body>
        </Card>

    )
}
