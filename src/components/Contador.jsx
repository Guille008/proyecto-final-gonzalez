import { HStack, IconButton, Text } from "@chakra-ui/react"
import { contexto } from "./Contexto"
import { useContext, useState } from "react"


// export function Contador() {

//     const { cantidad, setCantidad } = useContext(contexto);


//     return (
//         <HStack spacing={4}>
//             <IconButton
//                 aria-label="Sumar"
//                 size="sm"
//                 variant="ghost"
//                 onClick={() => setCantidad(cantidad + 1)}>
//                 +
//             </IconButton>

//             <Text fontSize="lg" fontWeight="bold">
//                 {cantidad}
//             </Text>

//             <IconButton
//                 aria-label="Restar"
//                 size="sm"
//                 variant="ghost"
//                 onClick={() => setCantidad(cantidad - 1)}
//                 isDisabled={cantidad <= 0}>
//                 -
//             </IconButton>
//         </HStack>
//     )
// }
export function Contador({ id }) {

    const { cantidades, setCantidades } = useContext(contexto);

    const cantidad = cantidades[id] || 0;

    const sumar = () => {
        setCantidades(prev => ({
            ...prev,
            [id]: (prev[id] || 0) + 1
        }));
    };

    const restar = () => {
        setCantidades(prev => ({
            ...prev,
            [id]: Math.max((prev[id] || 0) - 1, 0)
        }));
    };

    return (
        <HStack spacing={4}>
            <IconButton
                aria-label="Sumar"
                size="sm"
                variant="ghost"
                onClick={sumar}>
                +
            </IconButton>

            <Text fontSize="lg" fontWeight="bold">
                {cantidad}
            </Text>

            <IconButton
                aria-label="Restar"
                size="sm"
                variant="ghost"
                onClick={restar}
                isDisabled={cantidad <= 0}>
                -
            </IconButton>
        </HStack>
    )
}