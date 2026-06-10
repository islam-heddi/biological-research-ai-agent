import Input from "./Input";
import Button from "./FlashButton";
import { useState } from "react";
import { toast } from "react-toastify";
function UpdateEmail() {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const handleSave = () => {
        if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
            toast.error("Email is not valid")
            return;
        }
        if(!password) {
            toast.error("enter the password to proceed");
            return;
        }
    }

  return (
    <>
        <div className="pb-4">
            <label>Email : </label>
            <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your new email" type="email" />
          
            <label>Confirm password : </label>
            <Input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Confirm your password" type="password" />
        </div>
        <Button onClick={() => handleSave()}>Save Changes</Button>
    </>
  )
}

export default UpdateEmail