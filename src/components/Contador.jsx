import { Button, HStack, IconButton, Text } from "@chakra-ui/react"
import { contexto } from "./Contexto"
import { useContext } from "react"


export function Contador() {

    const { cantidad, setCantidad } = useContext(contexto);


    return (
        <HStack spacing={4}>
            <IconButton
                aria-label="Sumar"
                size="sm"
                variant="ghost"
                onClick={() => setCantidad(cantidad + 1)}>
                +
            </IconButton>

            <Text fontSize="lg" fontWeight="bold">
                {cantidad}
            </Text>

            <IconButton
                aria-label="Restar"
                size="sm"
                variant="ghost"
                onClick={() => setCantidad(cantidad - 1)}
                isDisabled={cantidad <= 0}>
                -
            </IconButton>
        </HStack>
    )
}