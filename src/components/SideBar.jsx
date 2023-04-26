import React from "react";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <aside className="h-screen bg-gray-200">
      <div className="flex flex-col w-64 bg-gray-800 h-full text-gray-100">
        <nav className="flex flex-col flex-1 py-4">
          <Link
            to="/dashboard"
            className="flex items-center mt-4 py-2 px-6 bg-opacity-25 text-gray-100 hover:bg-gray-700 hover:border-l-4 hover:border-blue-500"
          >
            <i className="fas fa-tachometer-alt mr-3"></i>
            Dashboard
          </Link>
          <Link
            to="/users"
            className="flex items-center mt-4 py-2 px-6 bg-opacity-25 text-gray-100 hover:bg-gray-700 hover:border-l-4 hover:border-blue-500"
          >
            <i className="fas fa-tachometer-alt mr-3"></i>
            Users
          </Link>
          <Link
            to="/settings"
            className="flex items-center mt-4 py-2 px-6 bg-opacity-25 text-gray-100 hover:bg-gray-700 hover:border-l-4 hover:border-blue-500"
          >
            <i className="fas fa-tachometer-alt mr-3"></i>
            Settings
          </Link>
        </nav>
      </div>
    </aside>
  );
}