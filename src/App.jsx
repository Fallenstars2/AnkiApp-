

import Cabecalho from "./components/cabecalho/Cabecalho";

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from "./paginas/homepage";
import Cardpage from "./paginas/Cardpage"; // Import the Cardpage component
import { useNavigate } from 'react-router-dom';
import Cardmaker from "./paginas/Cardmaker";

// Define the router with paths for both Homepage and Cardpage
const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: '/cardpage', // Define the route for Cardpage
    element: <Cardpage />, 
  },
  {
    path: '/cardmaker', // Define the route for Cardpage
    element: <Cardmaker />, 
  },
]);

function App() {
  return (
    <RouterProvider router={router} /> // Use RouterProvider to apply the router
  );
}

export default App;
