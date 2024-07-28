import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import { PaginaInicial } from "./paginas";
import { ModalidadePage } from "./paginas/modalidades";
import { ProfessoresPagina } from "./paginas/professores";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PaginaInicial/>
  },
  {
    path: "/modalidades",
    element: <ModalidadePage/>
  },
  {
    path: '/professores',
    element: <ProfessoresPagina/>
  }

 
]);


export function App() {
  return <RouterProvider router={router} />
}
