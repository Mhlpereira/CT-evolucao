import { Footer } from "../footer";
import { Topo } from "../topo";
import { CardProf } from "./cardProf";

export function ProfessoresPagina (){
    return (
        <div>
            <Topo/>
            <div>
                <section>
                    <CardProf/>
                </section>
            </div>
            <Footer/>
        </div>
    )
}