import { useContext } from "react"
import { contexto } from "./Contexto"
import { Box, Card, Image, Text } from "@chakra-ui/react";
import { ButtonComprar } from "./ButtonComprar";
import { Contador } from "./Contador";

export function ItemDetail(props) {

    const valorContexto = useContext(contexto)

    return (
        <Card.Root maxW="sm" overflow="hidden">
            <Box p="2">
            <Image
                src={props.produc.img}
                alt={props.produc.nombre}
            />
            <Card.Body gap="2">
                <Card.Title>{props.produc.nombre}</Card.Title>
                <Card.Description>
                    {props.produc.descripcion}
                </Card.Description>
                <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
                    ${props.produc.precio}
                </Text>
            </Card.Body>
            <Card.Footer gap="2">
                <ButtonComprar/>
                <Contador/>
            </Card.Footer>
            </Box>
        </Card.Root>
    )
}

