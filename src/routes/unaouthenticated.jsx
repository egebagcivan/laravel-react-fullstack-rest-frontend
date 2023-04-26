import { createBrowserRouter } from 'react-router-dom'
import Login from '../page/login'

export default createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/login",
    element: <Login />
  }
]);