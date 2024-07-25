
import { SetStateAction, useState } from "react";
import { Button } from "../../componentes/button";
import { Footer } from "../footer";
import { Topo } from "../topo";
import { ModalModalidades } from "./modalModalidades";

export function ModalidadePage() {


    const horarios = [{
        jiuJitsu: {
            horario1: '10:00 as 11:00',
            horario2: '11:00 as 12:00',
            horario3: '12:00 as 13:00'
        },
        judo: {
            horario1: '13:00 as 14:00',
            horario2: '14:00 as 15:00',
            horario3: '15:00 as 16:00'
        }
    }]

    const [estaCriadoModalModalidades, setEstaCriadoModalModalidades] = useState(false);

    function abrirModalModalidades() {
        setEstaCriadoModalModalidades(true);
    }

    function fecharModalModalidades() {
        setEstaCriadoModalModalidades(false);
    }

    return (
        <div>
            <Topo />
            <main>
                <div className="flex md:flex-col flex-row">
                    <div className="max-w-screen-xl w-full flex-1 md:space-y-4 md:p-8 pt-6 mx-auto h-auto mt-16">
                        <section className="flex justify-center items-center gap-9">
                            <Button onClick={() =>abrirModalModalidades()} variant="primary" size="full">Jiu-Jitsu</Button>
                            <Button variant="primary" size="full">Judô</Button>
                            <Button variant="primary" size="full">Muy thay</Button>
                            <Button variant="primary" size="full">Kung-fu</Button>
                            <Button variant="primary" size="full">Funcional</Button>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
            {estaCriadoModalModalidades && (
                <ModalModalidades
                    fecharModalModalidades={fecharModalModalidades} />
            )}
        </div>


    )
}