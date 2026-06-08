import { useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import { CircleUser, Leaf, Settings } from "lucide-react";
import { Cpu } from "lucide-react";
import { Dna } from "lucide-react";
import { toast } from "react-toastify";
import { api } from "../api/api";
import { DECONNECT } from "../api/endpoints.constants";

type NavigationType = {
    name: string;
    link: string;
}

interface ISideBar {
    list: NavigationType[]
}
function SideBar({list}: ISideBar) {
    const navigate = useNavigate()
    const user = useSelector((state: any)=> state.auth.value.user)
    const deconnect = async () => {
        try {
            await api.delete(DECONNECT)
            navigate("/login")
            toast.success("Log out successfully");
        } catch (error) {
            toast.error("Error when logout")
        }
    }

    const selectIcon = (title: string) => {
        if(title == "Setting") {
            return <Settings color="#11ff00" />
        }else if(title == "Researchs") {
            return <Dna color="#11ff00" />
        }else if(title == "Chatbot") {
            return <Cpu color="#11ff00" />
        }else{
            return <></>
        }
    }
  return (
    <div className="inline-flex flex-col bg-[#1f1f1f] h-screen rounded-2xl w-3/12 min-w-52 max-w-75">
        <div className="flex flex-row justify-center p-4">
      <Leaf size={"50px"} color="#11ff00" />
      <h1 className="text-2xl m-3">ChatBio</h1>
      </div>
        <div className="p-4 flex flex-row gap-2 items-center">
            <CircleUser size={"50px"} color="#11ff00" />
            <p className="text-lg">{user}</p>
        </div>
        {list.map((value, index) => <Fragment key={index}>
            <Link className="text-white hover:bg-gray-600 p-4 inline-flex flex-row gap-2" to={value.link}>
                <div className="p-4 inline-flex flex-row gap-2">
                    {selectIcon(value.name)}
                    {value.name}
                </div>
            </Link>
        </Fragment>)}
        <div className="cursor-pointer" >
        <div onClick={() => deconnect()} className="bottom-0 absolute text-white hover:bg-gray-600 p-4 inline-flex flex-row gap-2">
            <div className="p-4 inline-flex flex-row gap-2">
                <CircleUser color="#11ff00" />
                Logout
            </div>
        </div>
        </div>
    </div>
  )
}

export default SideBar