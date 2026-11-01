import './App.css';

import Action from './Components/Action/Action';
import Drama from './Components/Drama/Drama';
import Fantsy from './Components/Fantsy/Fantsy';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import NotFound from './Components/NotFound/NotFound';


const routes = createBrowserRouter([
  {path:"/" , element:<Layout/> , children:[
    {index:true, element: <Action/>},
    {path: 'drama', element: <Drama/>},
    {path: 'fantsy', element: <Fantsy/>},
    {path: '*', element: <NotFound/>}
  ]}
]);



function App() {
    return (
    
    <RouterProvider router={routes}/>



);
}



export default App;
