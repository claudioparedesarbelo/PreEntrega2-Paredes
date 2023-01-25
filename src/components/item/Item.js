import './Item.css'

import ItemCount from '../itemCount/ItemCount'

const Item = () => {

    return(
        <div>
            <p>Este es el item</p>
            <ItemCount stock="2"/>
        </div>
    )

}

export default Item