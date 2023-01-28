import './ItemDetail.css'

import Card from 'react-bootstrap/Card';
import ItemCount from '../itemCount/ItemCount';
import ItemListContainer from '../itemListContainer/ItemListContainer';

const ItemDetail = (props) => {

    const { articulo, nombre, precio } = props.data

    return (

        <article className='itemDetail-producto'>
            <h1>DETALLE DEL PRODUCTO SELECCIONADO</h1>
            <Card className='card-separated'>
                <Card.Header as="h5">{articulo}</Card.Header>
                <Card.Body>
                    <Card.Title>{articulo} || Value ={precio}</Card.Title>
                    <Card.Text>
                        {nombre}
                    </Card.Text>

                    <ItemCount stock={stock} />
                </Card.Body>
            </Card>
            <h1>MAS PRODUCTOS</h1>
            <ItemListContainer />
        </article>


    )

}

export default ItemDetail