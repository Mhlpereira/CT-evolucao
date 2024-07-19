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

 
]);


export function App() {
  return <RouterProvider router={router} />
}
