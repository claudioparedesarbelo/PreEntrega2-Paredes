import './Home.css'

import Imagen from '../../assets/img/portada.webp'

const Home = () => {

    return(
        <div className='imagenPortada'>
        <img src={Imagen} alt=''/>
        </div>
    )

}

export default Home