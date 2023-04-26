import React from "react";
import TopNavigation from "../components/TopNavigation";
import SidebarNavigation from "../components/SideBar";
import UsersDataTable from "../components/UserDataTable/index";

export default function users() {
  return (
    <div className="h-screen">
      <TopNavigation />
      <div className="flex">
        <SidebarNavigation />
        <main className="flex-1 p-6">
          <h1 className="w-full text-3xl text-gray-800 font-bold leading-tight">
            Users
          </h1>
          <UsersDataTable />
        </main>
      </div>
    </div>
  );
}