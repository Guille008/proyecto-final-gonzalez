import { Button } from "@chakra-ui/react"
import { contexto } from "./Contexto"
import { useContext } from "react"

export function ButtonComprar({ producto }) {

    const {
        cantidades,
        setCantidades,
        carrito,
        setCarrito,
        totalCarrito,
        setTotalCarrito,
        canTotalCarrito,
        setcanTotalCarrito
    } = useContext(contexto);

    const cantidad = cantidades[producto.id] || 0;

    const handleComprar = () => {

        if (cantidad <= 0) return;

        setCarrito(prev => [
            ...prev,
            { ...producto, cantidad }
        ]);

        setcanTotalCarrito(prev => prev + cantidad);
        setTotalCarrito(prev => prev + (producto.precio * cantidad));

        setCantidades(prev => ({
            ...prev,
            [producto.id]: 0
        }));
    };

    return (
        <Button
            p="1"
            disabled={cantidad <= 0}
            css={{
                "&:disabled": {
                cursor: "not-allowed",
                opacity: 0.6,
                },
            }}
            colorScheme="teal"
            onClick={handleComprar}
        >
            Comprar
        </Button>
    )
}