import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import './ItemDetailContainer.css'

import ItemDetail from '../itemDetail/ItemDetail'



const ItemDetailContainer = () => {

    const [productos,setProductos] = useState([])

    const { productoId } = useParams()

    useEffect(()=>{
        fetch('/data.json')
    .then(res=>res.json())
    .then(productos=>setProductos(<ItemDetail key={productos.id} id={"producto" + productos.id} data={productos}/>))
    },[productoId])


    return (
        <section className='itemDetail-box'>
             
            {productos}
        </section>
    )

}


export default ItemDetailContainer