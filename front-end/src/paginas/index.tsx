import { Footer } from "./footer";
import { Topo } from "./topo";


export function PaginaInicial() {
    return (
        <div>
            <Topo />
            <div>
                <div className="flex items-center justify-center">
                    <section>
                        <img className="flex opacity-15 size-80 " src="/logo-fundo.svg" alt="bg"></img>
                    </section>
                </div>

            </div>
            <Footer/> 
        </div>
    )
}