import {Button} from "@chakra-ui/react"
import {contexto} from "./Contexto"
import {useContext} from "react"

export function ButtonComprar(props) {

    const { cantidad,
            canTotalCarrito,
            setcanTotalCarrito,
            totalCarrito,
            setTotalCarrito,
            carrito,
            setCarrito
        } = useContext(contexto);

    return (
        <Button p="1"
            disabled={cantidad <= 0}
            css={{
                "&:disabled": {
                    cursor: "not-allowed",
                    opacity: 0.6,
                },
            }}
            colorScheme="teal"
            onClick={() =>{ 
                
                setcanTotalCarrito(canTotalCarrito + cantidad);
                setTotalCarrito(totalCarrito + (props.producto.precio * cantidad));
                carrito.push({...props.producto, cantidad: cantidad});
                
                }}
        >
            Comprar
        </Button>
)

    
}
