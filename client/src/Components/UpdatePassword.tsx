import Input from "./Input";
import Button from "./FlashButton";
import { useState } from "react";
import { toast } from "react-toastify";
function UpdateEmail() {
    const [password, setPassword] = useState<string>("")
    const [newPassword, setNewPassword] = useState<string>("")
    const [confirmPassword, setConfirmPassword] = useState<string>("")
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
        <Button onClick={() => handleSave()}>Save Changes</Button>
    </>
  )
}

export default UpdateEmail