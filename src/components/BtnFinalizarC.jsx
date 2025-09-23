import {
    Button,
    ButtonGroup,
    CloseButton,
    Drawer,
    Portal,
} from "@chakra-ui/react";
import { BtnConfirmar } from "./BtnConfirmar";
import { NumOrden } from "./NumOeden";

export function BtnFinalizarC() {
    return (
        <Drawer.Root size="md">
            <Drawer.Trigger asChild>
                <Button variant="outline" size="xl">
                    Finalizar compra
                </Button>
            </Drawer.Trigger>
            <Portal>
                <Drawer.Backdrop />
                <Drawer.Positioner>
                    <Drawer.Content>
                        <Drawer.Header>
                            <Drawer.CloseTrigger asChild pos="initial">
                                <CloseButton />
                            </Drawer.CloseTrigger>
                            <Drawer.Title flex="1">
                                Esta a punto de confirmar su compra!
                            </Drawer.Title>
                            <ButtonGroup>
                                <BtnConfirmar />
                            </ButtonGroup>
                        </Drawer.Header>
                        <Drawer.Body>
                            <br/>
                            <p>
                                Por favor chequee que sus datos sean correctos.
                                <br/>
                            </p>
                            <NumOrden/>
                        </Drawer.Body>
                    </Drawer.Content>
                </Drawer.Positioner>
            </Portal>
        </Drawer.Root>
    );
}
