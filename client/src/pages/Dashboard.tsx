import { useSelector } from "react-redux"
function Dashboard() {
  const user = useSelector((state: any) => state.auth.value.user);
  const email = useSelector((state: any) => state.auth.value.email);
  return (
    <div>
      {user} - {email}
    </div>
  )
}

export default Dashboard