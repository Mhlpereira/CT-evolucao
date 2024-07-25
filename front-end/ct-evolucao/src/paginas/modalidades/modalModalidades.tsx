import { Swords, X } from "lucide-react";
import { Button } from "../../componentes/button";

interface ModalModalidadesProps {
    fecharModalModalidades: () => void;

}

export function ModalModalidades({
    fecharModalModalidades,

}: ModalModalidadesProps) {

    {/*const navigate = useNavigate();*/ }

    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
            <div className="w-[640] rounded-xl py-5 px-6 shadow-shape bg-quarta space-y-4 scale-90">
                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <h2>horario</h2>
                        <button type='button' onClick={fecharModalModalidades}>
                            <X size="15" text-primeira />
                        </button>
                    </div>

                </div>
                <section className="space-y-3">
                    <ul className="gap-2">
                        <li>10:00 as 11:00</li>
                        <li>11:00 as 12:00</li>
                        <li>12:00 as 13:00</li>
                    </ul>
                    
                    <Button type="submit" variant="primary" size="full">
                        Agendar uma aula!
                        <Swords className="size-5" />
                    </Button>
                </section>
            </div>

        </div>
    )




}