import Input from "./Input";
import Button from "./FlashButton";
import { useState, useTransition } from "react";
import { toast } from "react-toastify";
import { api } from "../api/api";
import { UPDATE_PROFILE_PASSWORD } from "../api/endpoints.constants";
import type { AxiosError } from "axios";
function UpdatePassword() {
    const [password, setPassword] = useState<string>("")
    const [newPassword, setNewPassword] = useState<string>("")
    const [confirmPassword, setConfirmPassword] = useState<string>("")
    const [loading, startTransition] =useTransition()
    const handleSave = () => {
        if(!password) {
            toast.error("enter the password to proceed");
            return;
        }
        if(!newPassword) {
            toast.error("enter the new password to proceed");
            return;
        }
        if(!confirmPassword) {
            toast.error("enter the confirm password to proceed");
            return;
        }
        startTransition(async () => {
            try {
                await api.patch(UPDATE_PROFILE_PASSWORD, {
                    newPassword,
                    password
                })
                toast.success("password updated");
            } catch (error: any) {
                toast.error(error.response.data)
            }
        })
    }

  return (
    <>
        <p>change your password</p>
        <div className="pb-4">
        <label>Current Password : </label>
        <Input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your current password" type="password" />
        
        <label>New Password : </label>
        <Input value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder="Enter your new password" type="password" />
        
        <label>Confirm new password : </label>
        <Input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm your new password" type="password" />
        </div>
        <Button isDisabled={loading} onClick={() => handleSave()}>{loading? "Loading..." :"Save Changes"}</Button>
    </>
  )
}

export default UpdatePassword