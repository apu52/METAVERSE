import React from "react"
import {createRoot} from "react-dom/client"
import App from "./components/App"
import Contact from "./components/Contact"
import Product from "./components/Products"
import Create from "./components/Createproduct"
import Update from "./components/Update"
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.js'
import './main/style.css'

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
{
    path: "/",
    element: <App />,
},
{
    path:"contact",
    element: <Contact />
},
{
    path:"products",
    element:<Product />
},
{
    path:"create",
    element:<Create />
},
{
    path:"update",
    element:<Update />
}
]);
const domNode=document.getElementById('root');
const root=createRoot(domNode);
root.render(
    <RouterProvider router={router} />
)


