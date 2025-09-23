import { Box, Circle, } from "@chakra-ui/react";
import { useContext } from "react";
import { contexto } from "./Contexto";
import {useNavigate } from "react-router-dom";



export function CartWidge() {

    const valorContexto = useContext(contexto)
    const navigate = useNavigate();


    function btnCarrito() {
        navigate("/FinalizacionCompra");
    };

    return (


        <Box position="relative" w="fit-content">
            <button onClick={btnCarrito}>🛒</button>
            {valorContexto.canTotalCarrito> 0 && (
                <Circle
                    size="5"
                    bg="red.500"
                    color="white"
                    fontSize="xs"
                    fontWeight="bold"
                    position="absolute"
                    top="0"
                    right="0"
                    transform="translate(30%, -30%)"
                >
                    {valorContexto.canTotalCarrito}
                </Circle>
            )}
        </Box>



    );
}