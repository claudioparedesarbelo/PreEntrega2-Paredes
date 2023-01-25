
import './NavBar.css'

import '../cardWidget/CardWidget.js'
import '../../assets/img/nike.png'

import Logo from '../../assets/img/nike.png'
import CardWidget from '../cardWidget/CardWidget'


const  NavBar = () => {

    return(
        <header className='NavBar'>
            <div>
                <a className='LogoNike' href='../../index.js'><img src= {Logo}></img></a>
            </div>
            <div className='Botones'>
            <button type="button" class="btn btn-secondary">Productos</button>
            <button type="button" class="btn btn-secondary">Remeras</button>
            <button type="button" class="btn btn-secondary">Pantalones</button>
            <button type="button" class="btn btn-secondary">Zapatillas</button>
            <CardWidget />
            </div>
        </header>
    )
}

export default NavBar  