import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { api } from "../api/api";
import { GET_AUTH } from "../api/endpoints.constants";
import { useDispatch } from "react-redux";
import { update } from "./AuthState";

function Auth({children}: Readonly<{children: React.ReactNode}>) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const publicRoutes = [
    "/",
    "/register",
    "/login"
  ]

  useEffect(() => {
    api.get(GET_AUTH)
    .then((res) => {
//      console.log(res.data)
      if(publicRoutes.includes(window.location.pathname)){
        navigate("/dashboard")
        dispatch(update({
          userId: res.data._id,
          user: res.data.name,
          isAuthed: true,
          email: res.data.email
        }))
      }
    })
    .catch(err => {
      if(!publicRoutes.includes(window.location.pathname)){
        console.log(err)
        navigate("/login")
        dispatch(update({
          userId: "",
          user: "",
          isAuthed: false,
          email: ""
        }))
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