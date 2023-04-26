import { createBrowserRouter } from 'react-router-dom'
import Dashboard from '../page/dashboard'
import Settings from '../page/settings'
import Users from '../page/users'

export default createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  },
  {
    path: "/settings",
    element: <Settings />
  },
  {
    path: "/users",
    element: <Users />
  }
]);
