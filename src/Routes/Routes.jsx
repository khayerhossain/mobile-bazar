

import {
  createBrowserRouter,
} from "react-router";
import Home from "../Pages/Home/Home";
import App from "../App";
import About from "../Pages/About/About";
import MainLayouts from "../Layouts/MainLayouts";



export const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayouts ,
    children: [{
      path: '/',
      loader:()=>fetch('Phones.json'),
      Component:Home,

},
{
path: '/about',
Component:About,
},
{
path:'/favorites',
element: <h1>Welcome in Favorites page!</h1>
},
 ] 
  },
]);
