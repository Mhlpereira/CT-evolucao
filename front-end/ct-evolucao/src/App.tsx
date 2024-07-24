import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import { PaginaInicial } from "./paginas";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PaginaInicial/>
  },
  {
    path: "/modalidades",
  }

 
]);


export function App() {
  return <RouterProvider router={router} />
}
