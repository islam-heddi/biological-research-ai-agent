import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import { CircleUser, Leaf, Settings } from "lucide-react";
import { Cpu } from "lucide-react";
import { Dna } from "lucide-react";

type NavigationType = {
    name: string;
    link: string;
}

interface ISideBar {
    list: NavigationType[]
}
function SideBar({list}: ISideBar) {
    useSelector((state: any)=> console.log(state))
    const user = useSelector((state: any)=> state.auth.value.user)
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
        <div className="flex flex-row justify-center">
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
    </div>
  )
}

export default SideBar