import Input from "./Input";
import Button from "./FlashButton";
import { useState } from "react";
function UpdateName() {
    const [name, setName] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const handleSave = () => {
        console.log(name, password)
    }

  return (
    <>
        <div className="pb-4">
            <label>Name : </label>
            <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your new name" type="text" />
          
            <label>Confirm password : </label>
            <Input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Confirm your password" type="password" />
        </div>
        <Button onClick={() => handleSave()}>Save Changes</Button>
    </>
  )
}

export default UpdateName