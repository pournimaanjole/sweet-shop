
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './views/Home/Home';
import Contact from './views/Contact/Contact';
import About from './views/About/About';
import Readpost from './views/Readpost/Readpost';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
const  router= createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/readpost',
    element:<Readpost/>
  },
  {
path:'/readpost/contact/:id',
element:<Contact/>
  },
  {
path:'/about',
element:<About/>
  },
  {
    path:'*',
    element:<div>page not found</div>
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<RouterProvider router={router}/> 
);

