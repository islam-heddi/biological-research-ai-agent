import Input from "./Input";
import Button from "./FlashButton";
import { useState, useTransition } from "react";
import { toast } from "react-toastify";
import { api } from "../api/api";
import { UPDATE_PROFILE_EMAIL } from "../api/endpoints.constants";
function UpdateEmail() {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [loading, startTransition] = useTransition()
    const handleSave = () => {
        if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
            toast.error("Email is not valid")
            return;
        }
        if(!password) {
            toast.error("enter the password to proceed");
            return;
        }
        startTransition(async () => {
            try {
                await api.patch(UPDATE_PROFILE_EMAIL, {
                    password,
                    email
                })
                toast.success("email updated");
            } catch (error: any) {
                toast.error(error.response.data);
            }
        })

    }

  return (
    <>
        <div className="pb-4">
            <label>Email : </label>
            <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your new email" type="email" />
          
            <label>Confirm password : </label>
            <Input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Confirm your password" type="password" />
        </div>
        <Button isDisabled={loading} onClick={() => handleSave()}>{loading? "Loading..." :"Save Changes"}</Button>
    </>
  )
}

export default UpdateEmail