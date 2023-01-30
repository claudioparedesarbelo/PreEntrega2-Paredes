import './ItemDetail.css'

import Card from 'react-bootstrap/Card';


import ItemCount from '../itemCount/ItemCount';

const ItemDetail = (props) => {

    const {articulo, nombre, precio, stock} = props.data

    return (

        <article className='itemDetail-producto'>
            
            <Card className='card-separated'>
            <Card.Header >{articulo}</Card.Header>
            <Card.Body>
                <Card.Title>${precio}</Card.Title>
                <Card.Text>
                    {nombre}
                </Card.Text>
                <ItemCount stock={stock}/>
              </Card.Body>
        </Card>
            
        </article>


    )

}

export default ItemDetail