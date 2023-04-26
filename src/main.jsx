import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routerAuthenticated from './routes/authenticated'
import routerUnAuthenticated from './routes/unaouthenticated'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {localStorage.getItem("access_token") ? (
      <RouterProvider router={routerAuthenticated} />
    ) : (
      <RouterProvider router={routerUnAuthenticated} />
    )}
  </React.StrictMode>,
)
