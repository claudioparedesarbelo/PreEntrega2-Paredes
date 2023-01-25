import {useState,useEffect} from 'react'
import './Hooks.css'

const Hooks = () => {

    const [contador,setContador] = useState(0)
    
    useEffect(()=> {
        console.log("componente iniciando")
    })

    const sumar = () => {
        setContador(contador + 1)
    }
    const restar = () => {
        setContador(contador - 1)
     }

    return(
        <div>
            <button onClick={sumar}>Sumar</button>
            <p>{contador}</p>
            <button onClick={restar}>Restar</button>
        </div>
    )
}

export default Hooks