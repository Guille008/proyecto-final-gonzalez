import { CartWidge } from "./CartWidge";
import { Link } from "react-router-dom";


export function Nav(){
    return(
        <nav>
            <article>
                <img src="./imagenes/logo.png"></img>
            </article>
            <article>
                <ul>
                    <li><Link to="Inicio">Inicio</Link></li>
                    <li><Link to="Contacto">Contacto</Link></li>
                    <li><Link to="Sucursales">Sucursales</Link></li>
                </ul>
            </article>
            <article>
                <CartWidge/>
            </article>
        </nav>
    )
}