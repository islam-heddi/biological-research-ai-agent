import { Outlet } from "react-router-dom"
import SideBar from "./SideBar"

function PrivateLayout() {
  return (
    <div className="flex max-[800px]:flex-col min-h-screen bg-[#121212]">
      <SideBar
        list={[
          { name: "Chatbot", link: "/chat" },
          { name: "Researchs", link: "/Researchs" },
          { name: "Setting", link: "/settings" },
        ]}
      />
      <main className="flex-1 p-4">
        <Outlet />
      </main>
    </div>
  )
}

export default PrivateLayout