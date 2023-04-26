import React from 'react'
import TopNavigation from '../components/TopNavigation'
import SidebarNavigation from '../components/SideBar'

export default function settings() {
  return (
    <div className="h-screen">
      <TopNavigation />
      <div className="flex">
        <SidebarNavigation />
        <main className="flex-1 bg-gray-200 p-6">
          <h1 className="w-full text-3xl text-gray-800 font-bold leading-tight">
            Settings
          </h1>
        </main>
      </div>
    </div>
  );
}
