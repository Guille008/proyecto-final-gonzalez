import { Button, Field, Fieldset, For, Input, NativeSelect, Stack } from "@chakra-ui/react";

export function Contacto(){
    return(
        <main>
                        <Fieldset.Root size="lg" maxW="md">
                <Stack>
                    <Fieldset.Legend>Comunicate con nosotros</Fieldset.Legend>
                    <Fieldset.HelperText>
                        Dejanos tu consulta u opinion y te responderemos a la brevedad.
                    </Fieldset.HelperText>
                </Stack>

                <Fieldset.Content>
                    <Field.Root>
                        <Field.Label>Nombre</Field.Label>
                        <Input name="name" />
                    </Field.Root>

                    <Field.Root>
                        <Field.Label>Email</Field.Label>
                        <Input name="email" type="email" />
                    </Field.Root>

                    <Field.Root>
                        <Field.Label>Cuidad</Field.Label>
                        <NativeSelect.Root>
                            <NativeSelect.Field name="country">
                                <For each={["Cordoba", "Carlos paz", "Nono"]}>
                                    {(item) => (
                                        <option key={item} value={item}>
                                            {item}
                                        </option>
                                    )}
                                </For>
                            </NativeSelect.Field>
                            <NativeSelect.Indicator />
                        </NativeSelect.Root>
                    </Field.Root>
                </Fieldset.Content>

                <Button type="submit" alignSelf="flex-start">
                    Enviar
                </Button>
            </Fieldset.Root>
        </main>
    )
}