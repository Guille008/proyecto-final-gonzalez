import { useContext } from "react";
import { contexto } from "./Contexto";

export function NumOrden() {

    const { numOrden,} = useContext(contexto);
    
    return (
        <>
            {numOrden && (
                <p>Gracias por confiar en nosotros. Su número de orden es #{numOrden}</p>
            )}
        </>
    )
}