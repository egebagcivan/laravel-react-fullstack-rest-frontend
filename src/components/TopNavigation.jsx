import React from 'react'
import axios from 'axios'

export default function TopNavigation() {
  const handleLogout = () => {
    axios.post(
      `${import.meta.env.VITE_API_URL}api/v1/logout`, {}, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
      }
    }).then((response) => {
      localStorage.removeItem('access_token')
      window.location.href = '/login'
    }).catch((error) => {
      console.log(error)
    })
  }
  return (
    <nav className="border-b border-b-gray-400">
      <div className="flex items-cent justify-between flex-wrap bg-gray-800 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="text-2xl font-bold">
            {import.meta.env.VITE_APP_NAME}
          </span>
        </div>
        <div>
          <button
            onClick={handleLogout}
            className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}
