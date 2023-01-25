import './CardWidget.css'


const CardWidget = (props) => {
    return(
        <div className='cart-box'>
            <span className="material-symbols-outlined">shopping_cart</span>
            <p>{props.cantidad}</p>
        </div>
    )
}

export default CardWidget