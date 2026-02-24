import { createContext, useState } from "react";

export const contexto = createContext();
const MiProvider = contexto.Provider;

export function ProviderContexto(props) {

    const [cantidades, setCantidades] = useState({});
    const [canTotalCarrito, setcanTotalCarrito] = useState(0);
    const [carrito, setCarrito] = useState([]);
    const [totalCarrito, setTotalCarrito] = useState(0);
    const [numOrden, setnumOrden] = useState("");

    
    const ValorContexto = {
    carrito,
    setCarrito,
    totalCarrito,
    setTotalCarrito,
    cantidades,
    setCantidades,
    canTotalCarrito,
    setcanTotalCarrito,
    numOrden,
    setnumOrden,
    }
    return (
        <MiProvider value={ValorContexto}>
            {props.children}
        </MiProvider>
    )
}