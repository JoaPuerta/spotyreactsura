import './Historia.css'
import { Carrusel } from '../Carrusel/Carrusel.js'
import { Integrantes } from '../Integrantes/Integrantes'
export function Historia(){

    return(
        <>            
                <Carrusel></Carrusel>            
            <div className='container'>
                    <Integrantes></Integrantes>         
            </div>
        </>
    )
}