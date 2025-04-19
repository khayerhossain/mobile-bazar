
import {
  createBrowserRouter,
} from "react-router";
import Home from "../Pages/Home/Home";
import App from "../App";
import About from "../Pages/About/About";
import MainLayouts from "../Layouts/MainLayouts";
import PhoneDetails from "../Pages/PhoneDetails/PhoneDetails";
import Favorite from "../Pages/Favorite/Favorite";



export const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayouts ,
    children: [{
      path: '/',
      loader:()=>fetch('../Phones.json'),
      Component:Home,

},
{
path: '/about',
Component:About,
},
{
path:'/favorites',
Component:Favorite,
},
{
  path:'phoneDetails/:id',
  loader:()=>fetch('../Phones.json'),
  Component:PhoneDetails,


}
 ] 
  },
]);
