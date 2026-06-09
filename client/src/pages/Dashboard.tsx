import { useSelector } from "react-redux"
import { CircleUser } from "lucide-react";
function Dashboard() {
  const user = useSelector((state: any) => state.auth.value.user);
  const email = useSelector((state: any) => state.auth.value.email);
  return (
    <div className="bg-[#1f1f1f] p-4 rounded-2xl">
    <div className="flex flex-row gap-4 items-center ">
      <div>
          <CircleUser size={"120px"} color="#11ff00" />
      </div>
      <div className="text-4xl">
        {user} - {email}
      </div>
    </div>

    <p className="text-3xl p-4">Current Date : {(new Date(Date.now())).toDateString()}</p>
    </div>
  )
}

export default Dashboard