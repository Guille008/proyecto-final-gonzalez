import { VStack, HStack, Field, Input, RadioCard, Separator, Stack, Text, Em } from "@chakra-ui/react";
import { BtnFinalizarC } from "./BtnFinalizarC";
import { contexto } from "./Contexto";
import { useContext } from "react";

export function FinalizacionCompra() {
    const {
                canTotalCarrito,
                totalCarrito
            } = useContext(contexto);
    

    const items = [
        { value: "Norte", title: "Zona Norte" },
        { value: "Sur", title: "Zona sur" },
        { value: "Centro", title: "Zona Centro" },
    ]

    return (
        <main className="mainFormulario">
            <div className="formularioFinalizacion">
                <HStack gap="10" width="full">
                    <Field.Root required>
                        <Field.Label>
                            Nombre completo <Field.RequiredIndicator />
                        </Field.Label>
                        <Input placeholder="Jose Argento" variant="subtle" />
                    </Field.Root>
                    <Field.Root required>
                        <Field.Label>
                            DNI <Field.RequiredIndicator />
                        </Field.Label>
                        <Input placeholder="40555555" variant="subtle" />
                    </Field.Root>
                </HStack>
                <VStack>
                    <Field.Root required>
                        <Field.Label>
                            Email <Field.RequiredIndicator />
                        </Field.Label>
                        <Input placeholder="me@example.com" variant="subtle" />
                    </Field.Root>
                    <RadioCard.Root defaultValue="next">
                        <RadioCard.Label>Seleccione sucursal de retiro</RadioCard.Label>
                        <HStack align="stretch">
                            {items.map((item) => (
                                <RadioCard.Item key={item.value} value={item.value}>
                                    <RadioCard.ItemHiddenInput />
                                    <RadioCard.ItemControl>
                                        <RadioCard.ItemText>{item.title}</RadioCard.ItemText>
                                        <RadioCard.ItemIndicator />
                                    </RadioCard.ItemControl>
                                </RadioCard.Item>
                            ))}
                        </HStack>
                    </RadioCard.Root>
                </VStack>
                <Separator />
                <Stack>
                    <Text textStyle="2xl"> <Em>Resumen de su pedido</Em></Text>
                </Stack>
                <Stack>
                    <Text textStyle="sm"> Usted va a llevar {canTotalCarrito} producto/s.</Text>
                    <Text textStyle="sm"> El toal a abonar es de ${totalCarrito}</Text>
                </Stack>
                <Separator />
                <BtnFinalizarC/>
            </div>
        </main >
    )
}