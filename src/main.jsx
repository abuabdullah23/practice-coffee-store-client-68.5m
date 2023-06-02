import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Main from './layout/Main.jsx';
import AddCoffee from './components/AddCoffee/AddCoffee.jsx';
import CoffeeDetails from './components/CoffeeDetails/CoffeeDetails.jsx';
import UpdateCoffeeDetails from './components/UpdateCoffeeDetails/UpdateCoffeeDetails.jsx';
import Error from './Error.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/add-coffee',
        element: <AddCoffee></AddCoffee>
      },
      {
        path: '/update-coffee',
        element: <UpdateCoffeeDetails></UpdateCoffeeDetails>
      },
      {
        path: '/coffee-details',
        element: <CoffeeDetails></CoffeeDetails>
      },

    ]

  },
  {
    path: "*",
    element: <Error></Error>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
