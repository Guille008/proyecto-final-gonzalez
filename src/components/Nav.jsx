import { CartWidge } from "./CartWidge";


export function Nav(){
    return(
        <nav>
            <article>
                <img src="../imagenes/logo.png"></img>
            </article>
            <article>
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Contacto</a></li>
                    <li><a href="#">Sucursales</a></li>
                </ul>
            </article>
            <article>
                <CartWidge/>
            </article>
        </nav>
    )
}