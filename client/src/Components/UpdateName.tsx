import Input from "./Input";
import Button from "./FlashButton";
import { useState, useTransition } from "react";
import { toast } from "react-toastify";
import { api } from "../api/api";
import { UPDATE_PROFILE_NAME } from "../api/endpoints.constants";
function UpdateName() {
    const [loading, startTransition] = useTransition();
    const [name, setName] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const handleSave = () => {
        if(!name) {
            toast.error("Name cannot be empty");
            return;
        }
        if(!password) {
            toast.error("Password cannot be empty");
        }
        startTransition(async () => {
            try {
                await api.patch(UPDATE_PROFILE_NAME, {name, password});
                toast.success("Name updated successfully");
            } catch (error: any) {
                toast.error(error.response.data)
            }
        })
    }

  return (
    <>
        <div className="pb-4">
            <label>Name : </label>
            <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your new name" type="text" />
          
            <label>Confirm password : </label>
            <Input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Confirm your password" type="password" />
        </div>
        <Button isDisabled={loading} onClick={() => handleSave()}>{loading? "Loading..." :"Save Changes"}</Button>
    </>
  )
}

export default UpdateName