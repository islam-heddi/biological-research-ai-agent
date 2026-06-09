import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import { CircleUser, Leaf, LogOut, Menu, Settings, X } from "lucide-react";
import { Cpu } from "lucide-react";
import { Dna } from "lucide-react";
import { toast } from "react-toastify";
import { api } from "../api/api";
import { DECONNECT } from "../api/endpoints.constants";
import { useState } from "react";
import { clear } from "../context/AuthState";

type NavigationType = {
    name: string;
    link: string;
}

interface ISideBar {
    list: NavigationType[]
}
function SideBar({list}: ISideBar) {
    const dispatch = useDispatch()
    const [isOpened, setIsOpened] = useState<boolean>(false)
    const navigate = useNavigate()
    const user = useSelector((state: any)=> state.auth.value.user)
    const deconnect = async () => {
        try {
            await api.delete(DECONNECT)
            navigate("/login")
            toast.success("Log out successfully");
            dispatch(clear())
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
    <>
      <div className={`min-[700px]:hidden p-3 flex flex-row items-center justify-between bg-[#1f1f1f] rounded-2xl`}>
        <div>
          <div className={`${!isOpened? "": "hidden"} cursor-pointer`} onClick={() => setIsOpened(true)}>
            <Menu size={"30px"} color="#11ff00" />
          </div>
          <div className={`${isOpened? "": "hidden"} cursor-pointer`} onClick={() => setIsOpened(false)}>
            <X size={"30px"} color="#11ff00" />
          </div>
        </div>
        <div className="flex items-center gap-2">
            <Leaf size={"40px"} color="#11ff00" />
            <h1 className="text-2xl">ChatBio</h1>
        </div>
        <div></div>
      </div>

      <div className={`min-[700px]:hidden fixed inset-y-0 left-0 z-50 h-full w-72 bg-[#1f1f1f] p-4 ${isOpened ? "flex" : "hidden"} flex-col shadow-xl`}> 
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Leaf size={"40px"} color="#11ff00" />
            <h1 className="text-2xl">ChatBio</h1>
          </div>
          <div className="cursor-pointer" onClick={() => setIsOpened(false)}>
            <X size={"30px"} color="#11ff00" />
          </div>
        </div>
        <div className="p-4 flex flex-row gap-2 items-center border-b border-white/10 mb-4">
          <CircleUser size={"40px"} color="#11ff00" />
          <p className="text-lg">{user}</p>
        </div>
        {list.map((value, index) => (
          <Fragment key={index}>
            <Link
              className="text-white hover:bg-gray-600 p-4 inline-flex flex-row gap-2"
              to={value.link}
              onClick={() => setIsOpened(false)}
            >
              <div className="p-4 inline-flex flex-row gap-2">
                {selectIcon(value.name)}
                {value.name}
              </div>
            </Link>
          </Fragment>
        ))}
        <div className="mt-auto">
          <div
            onClick={() => {
              deconnect();
              setIsOpened(false);
            }}
            className="text-white hover:bg-gray-600 p-4 inline-flex flex-row gap-2 cursor-pointer"
          >
            <div className="p-4 inline-flex flex-row gap-2">
              <LogOut color="#ff0000"/>
              Logout
            </div>
          </div>
        </div>
      </div>

      <div className="max-[700px]:hidden inline-flex flex-col bg-[#1f1f1f] h-screen rounded-2xl w-3/12 min-w-52 max-w-75">
        <div className="flex flex-row justify-center p-4">
          <Leaf size={"50px"} color="#11ff00" />
          <h1 className="text-2xl m-3">ChatBio</h1>
        </div>
        <div className="p-4 flex flex-row gap-2 items-center">
          <CircleUser size={"50px"} color="#11ff00" />
          <p className="text-lg">{user}</p>
        </div>
        {list.map((value, index) => (
          <Fragment key={index}>
            <Link className="text-white hover:bg-gray-600 p-4 inline-flex flex-row gap-2" to={value.link}>
              <div className="p-4 inline-flex flex-row gap-2">
                {selectIcon(value.name)}
                {value.name}
              </div>
            </Link>
          </Fragment>
        ))}
        <div className="cursor-pointer">
          <div
            onClick={() => deconnect()}
            className="bottom-0 absolute text-white hover:bg-gray-600 p-4 inline-flex flex-row gap-2"
          >
            <div className="p-4 inline-flex flex-row gap-2">
                <LogOut color="#ff0000"/>              Logout
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SideBar