import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Cart} from "@/pages/Cart.tsx";
import {Products} from "@/pages/Products.tsx";
import Login from "@/pages/Login.tsx";
import {Register} from "@/pages/Register.tsx";

const router = createBrowserRouter([
    {
        path: "/products",
        element: <Products/>,
    },
    {
        path: "/login",
        element: <Login/>,
    },
    {
        path: "/register",
        element: <Register/>,
    },
    {
        path: "/carts",
        element: <Cart/>,
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)

