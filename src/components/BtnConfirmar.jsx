import { Button, Stack, Box, Alert } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { contexto } from "./Contexto";
import { useNavigate } from "react-router-dom";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebaseConfig";
import { toaster } from "./ui/toaster";

export function BtnConfirmar() {
    const { carrito, totalCarrito, setcanTotalCarrito, setTotalCarrito, setCarrito, setnumOrden } = useContext(contexto);
    const [showAlert, setShowAlert] = useState(false);
    const navigate = useNavigate();

    async function confirmarCompra() {
        try {
            const docRef = await addDoc(collection(db, "ordenes"), {
                fecha: serverTimestamp(),
                total: totalCarrito,
                items: carrito,
                estado: "pendiente",
            });

            setnumOrden(docRef.id);
            setcanTotalCarrito(0);
            setCarrito([]);
            setTotalCarrito(0);
            setShowAlert(true);
            setTimeout(() => {
                setnumOrden(0);
                navigate("/Inicio");
            }, 8000);

        } catch (error) {
            toaster.create({
                title: "Error al guardar el pedido",
                description: error.message,
                type: "error",
            });
        }
    }

    return (
        <>
            <Button colorScheme="green" onClick={confirmarCompra}>
                Confirmar
            </Button>

            {showAlert && (
                <Box position="fixed" bottom="4" left="50%" transform="translateX(-50%)" zIndex="1000">
                    <Stack gap="4">
                        <Alert.Root status="success" variant="subtle">
                            <Alert.Indicator />
                            <Alert.Title>
                                Pedido confirmado!! Gracias por tu compra
                            </Alert.Title>
                        </Alert.Root>
                    </Stack>
                </Box>
            )}
        </>
    );
}
