import Cabecalho from "./components/cabecalho/Cabecalho";
import Card from "./components/card"
import {createBrowserRouter, RouterProvider,} from 'react-router-dom';
import Homepage from "./paginas/homepage";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage/>,

  },

]);


function App() {


return(
  <> 

  <RouterProvider router={router} /> {/* Add RouterProvider to handle the route */}

  </>
);

}

export default App
