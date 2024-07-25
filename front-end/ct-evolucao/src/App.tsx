import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import { PaginaInicial } from "./paginas";
import { ModalidadePage } from "./paginas/modalidades";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PaginaInicial/>
  },
  {
    path: "/modalidades",
    element: <ModalidadePage/>
  }

 
]);


export function App() {
  return <RouterProvider router={router} />
}
