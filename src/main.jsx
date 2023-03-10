import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Contact from "./routes/contact";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import './index.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
