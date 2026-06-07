import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { api } from "../api/api";
import { GET_AUTH } from "../api/endpoints.constants";
function Auth({children}: Readonly<{children: React.ReactNode}>) {
  const navigate = useNavigate();
  console.log()
  const publicRoutes = [
    "/",
    "/register",
    "/login"
  ]

  useEffect(() => {
    api.get(GET_AUTH)
    .then(() => {
      if(publicRoutes.includes(window.location.pathname)){
        navigate("/dashboard")
      }
    })
    .catch(err => {
      if(!publicRoutes.includes(window.location.pathname)){
        console.log(err)
        navigate("/login")
      }
    })
  }, publicRoutes)


  return (
    <>
      {children}
    </>
  )
}

export default Auth