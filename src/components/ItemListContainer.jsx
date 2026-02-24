import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "./firebaseConfig"
import { Badge, Box, Button, Card, HStack, Image, Spinner, VStack, Text, Stack, Heading, Highlight } from "@chakra-ui/react"
import { ButtonComprar } from "./ButtonComprar"
import { Contador } from "./Contador"
import { toaster } from "./ui/toaster"

export function ItemListContainer() {
  const [products, setProducts] = useState([])
  const [categoria, setCategoria] = useState("todas")

  useEffect(() => {
    async function getDataByCategory() {
      try {
        const productosCollection = collection(db, "productos")

        let consultaFirebase

        if (categoria === "todas") {
          consultaFirebase = await getDocs(productosCollection)
        } else {
          const filtro = query(productosCollection, where("categoria", "==", categoria))
          consultaFirebase = await getDocs(filtro)
        }

        const productos = consultaFirebase.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))

        setProducts(productos)
      } catch (error) {
        toaster.create({
          title: "Error al guardar el pedido",
          description: error.message,
          type: "error",
        });
      }
    }

    getDataByCategory()
  }, [categoria])
  return (
    <main>
      <Stack>
        <Heading size="3xl" letterSpacing="tight">
          <Highlight query="with speed" styles={{ color: "teal.600" }}>
            Bienvenido a Sifint, tu tienda de suplementos deportivos online
          </Highlight>
        </Heading>
      </Stack>
      <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
        <option value="todas">Todos</option>
        <option value="proteina">Proteinas</option>
        <option value="creatinas">Creatinas</option>
        <option value="pre-entreno">Pre-Entreno</option>
        <option value="accesorios">Accesorios</option>
      </select>
      {products.length === 0 ? (
        <VStack colorPalette="teal">
          <Spinner color="colorPalette.1000" />
          <Text color="colorPalette.1000">Cargando..</Text>
        </VStack>
      ) :
        <section className="cardConteiner">
          {products.map((prod) => (
            <article className="card" key={prod.id}>
              <Card.Root flexDirection="row" overflow="hidden" maxW="xl" alignItems="center">
                <Box p="1">
                  <Image
                    objectFit="cover"
                    maxW="200px"
                    src={prod.img}
                    alt={prod.nombre}
                  />
                </Box>
                <Box>
                  <Card.Body>
                    <Card.Title mb="2">{prod.nombre}</Card.Title>
                    <Card.Description>
                      {prod.descripcion}
                    </Card.Description>
                    <HStack mt="4">
                      <Badge>{prod.presentacion}</Badge>
                    </HStack>
                  </Card.Body>
                  <Card.Footer>
                    <Button>
                      <Box p="1"><Link to={`/Detalle/${prod.id}`}>Detalle</Link></Box>
                    </Button>
                    <ButtonComprar producto={prod} />
                    <Contador id={prod.id} />
                  </Card.Footer>
                </Box>
              </Card.Root>
            </article>
          ))}
        </section>}
    </main>

  )
}
