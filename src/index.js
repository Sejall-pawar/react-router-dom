import ReactDOM from 'react-dom/client';

import Home from "./views/home/home"
import About from "./views/about/about"
import Categories from "./views/categories/categories";

const root = ReactDOM.createRoot(document.getElementById('root'));

const currentPath =window.location.pathname;

if (currentPath=="/"){
    root.render(<Home/>)
}
else if (currentPath=="/about"){
    root.render(<About/>)
}
else if (currentPath=="/categories"){
    root.render(<Categories/>)
}
else
{
    root.render(<h1>404 Not Found</h1>)
}