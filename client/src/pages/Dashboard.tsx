import { useSelector } from "react-redux"
import { CircleUser, NotepadText } from "lucide-react";
function Dashboard() {
  const user = useSelector((state: any) => state.auth.value.user);
  const email = useSelector((state: any) => state.auth.value.email);
  return (
    <>
    <div className="bg-[#1f1f1f] p-4 rounded-2xl">
    <div className="flex flex-row gap-4 items-center flex-wrap">
      <div>
          <CircleUser size={"120px"} color="#11ff00" />
      </div>
      <div className="text-4xl">
        {user} - {email}
      </div>
    </div>

    <p className="text-3xl p-4">Current Date : {(new Date(Date.now())).toDateString()}</p>
    </div>
    <div className="flex flex-col items-center gap-4 mt-10 p-4 bg-[#1f1f1f] rounded-2xl">
      <NotepadText size={"120px"} color="#e4f3b9" />
      <h1 className="text-2xl">To start, check the researchs or start a chat</h1>
    </div>
    </>
  )
}

export default Dashboard