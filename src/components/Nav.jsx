import { CartWidge } from "./CartWidge";
import { Link } from "react-router-dom";


export function Nav(){
    return(
        <nav>
            <article>
                <img src="../imagenes/logo.png"></img>
            </article>
            <article>
                <ul>
                    <li><Link to="inicio">Inicio</Link></li>
                    <li><Link to="contacto">Contacto</Link></li>
                    <li><Link to="sucursales">Sucursales</Link></li>
                </ul>
            </article>
            <article>
                <CartWidge/>
            </article>
        </nav>
    )
}