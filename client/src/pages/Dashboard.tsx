import SideBar from "../Components/SideBar"

function Dashboard() {
  return (
    <div>
      <SideBar list={[{name: "Chatbot", link: "/chat"}, {name: "Researchs", link: "/Researchs"}, {name: "Setting", link:"/settings"}]}/>
    </div>
  )
}

export default Dashboard