import { Outlet } from "react-router-dom";
// import { useState } from "react";

const Layout = () => {

  // const [isActive, setIsActive] = useState("");

  return (
    <main className="max-container min-h-screen font-roboto border-2 border-red-800 overflow-hidden">
      <Outlet />
    </main>
  )
}

export default Layout