import { createContext, useState } from "react";

export const contexto = createContext();
const MiProvider = contexto.Provider;

export function ProviderContexto(props) {

    const [cantidad, setCantidad] = useState(0);
    const [canTotalCarrito, setcanTotalCarrito] = useState(0);
    const [carrito, setCarrito] = useState([]);
    const [totalCarrito, setTotalCarrito] = useState(0);
    const [numOrden, setnumOrden] = useState("")

    
    const ValorContexto = {
        carrito,
        setCarrito,
        totalCarrito,
        setTotalCarrito,
        cantidad,
        setCantidad,
        canTotalCarrito,
        setcanTotalCarrito,
        numOrden,
        setnumOrden
    }
    return (
        <MiProvider value={ValorContexto}>
            {props.children}
        </MiProvider>
    )
}