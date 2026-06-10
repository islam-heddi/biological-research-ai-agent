import { useState, useTransition } from "react"
import Button from "./FlashButton"
import Input from "./Input"
import { toast } from "react-toastify";
import { api } from "../api/api";
import { DELETE_ACCOUNT } from "../api/endpoints.constants";
import { useDispatch } from "react-redux";
import { clear } from "../context/AuthState";

function DangerZone() {
  const [password, setPassword] = useState<string>("")
  const [loading, startTransition] = useTransition();
  const dispatch = useDispatch();
  const handleDelete = () => {
    startTransition(async () => {
      try {
        await api.patch(DELETE_ACCOUNT, {password})
        toast.success("account deleted")
        dispatch(clear())
      } catch (error: any) {
        toast.error(error.response.data)
      }
    })
  }
  return (
    <>
      <p>delete your account, you have to confirm your password first.</p>
      <div className="pb-4">
      <label>Confirm password : </label>
      <Input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Confirm your password" type="password" />
      </div>
      <Button isDisabled={loading} onClick={() => handleDelete()} backgroundColor="bg-[#ff0000]">{loading? "Loading..." : "Delete"}</Button>
    </>
  )
}

export default DangerZone