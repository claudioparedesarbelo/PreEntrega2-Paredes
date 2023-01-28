import './Item.css'


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


import ItemCount from '../itemCount/ItemCount'

const Item = (props) => {

    const {articulo, nombre, precio,stock, imgUrl} = props.data
    return(
                 
        
         <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={imgUrl} />
              <Card.Body>
                <Card.Title>{articulo}</Card.Title>
                <Card.Text>{nombre}</Card.Text>
                <Card.Text>${precio}</Card.Text>
                <ItemCount stock={stock}/>
              </Card.Body>
            </Card>
          );
        }
        
       
    
 


export default Item