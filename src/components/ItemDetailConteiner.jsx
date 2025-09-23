import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import { db } from "./firebaseConfig"
import { ItemDetail } from "./ItemDetail"
import { Button, Spinner, VStack, Text } from "@chakra-ui/react"
import { toaster } from "./ui/toaster"

export function ItemDetailConteiner() {
    const { id } = useParams()
    const [produc, setProduc] = useState(null)

    useEffect(() => {
        async function getSingleProductByDoc() {
            try {
                const filtro = doc(db, "productos", id)
                const consulta = await getDoc(filtro)

                if (consulta.exists()) {
                    setProduc({ id: consulta.id, ...consulta.data() })

                } else {
                    console.log("No encontrado")
                }
            } catch (error) {
            toaster.create({
                title: "Error al guardar el pedido",
                description: error.message,
                type: "error",
            });
        }
        }

        if (id) getSingleProductByDoc()
    }, [id])


    if (!produc) return (
        <main>
            <VStack colorPalette="teal">
                <Spinner color="colorPalette.1000" />
                <Text color="colorPalette.1000">Cargando..</Text>
            </VStack>
        </main>
    )

    return (
        <main>
            <ItemDetail produc={produc} />
        </main>
    )
}
