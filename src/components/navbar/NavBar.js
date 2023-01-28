import { Link } from 'react-router-dom'


import './NavBar.css'

import '../cardWidget/CardWidget.js'
import '../../assets/img/nike.png'

import Logo from '../../assets/img/nike.png'
import CardWidget from '../cardWidget/CardWidget'


const  NavBar = () => {

    return(
        <header className='header'>
             <Link to= "/home" className="logo"><img src={Logo} alt=""></img></Link>
                <ul className="menu">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/productos">Productos</Link></li>
                <li><Link to="/zapatillas">Zapatillas</Link></li>
                <li><Link to="/pantalones">Pantalones</Link></li>
                <li><Link to="/buzos">Buzos y Remeras</Link></li>
                <li><Link to="/aboutUs">Nosotros</Link></li>
                <li><Link to= "/CardWidget"><CardWidget cantidad="10" /></Link></li>
            </ul>
        </header>
    )
}

export default NavBar  