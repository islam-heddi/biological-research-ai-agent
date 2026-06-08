import { useSelector } from "react-redux"
function SideBar() {
    const auth = useSelector((state: any)=> {
        const {userId, user, isAuthed} = state.auth.value;
        const object = {userId, user, isAuthed};
        return object
    })
  return (
    <div>
        <div>
            {auth.user}
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