import { useSelector } from "react-redux"
function SideBar() {
    useSelector((state: any)=> console.log(state))
    const user = useSelector((state: any)=> state.auth.value.user)
  return (
    <div>
        <div>
            {user}
        </div>
        <div>
            Chat bot
        </div>
        <div>
            Researchs
        </div>
        <div>
            Settings
        </div>
    </div>
  )
}

export default SideBar