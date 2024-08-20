import ReactDOM from 'react-dom/client';
import "./index.css"

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from "./views/home/home"
import About from "./views/about/about"
import Categories from "./views/categories/categories";

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
  },
  {
    path: '/about',
    element: <About/>,
  },
  {
    path: '/categories',
    element: <Categories/>,
  },
])

root.render(<RouterProvider router={router}/>)
