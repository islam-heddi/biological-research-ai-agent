import Button from "./FlashButton"
import Input from "./Input"

function DangerZone() {
  return (
    <>
    <p>delete your account, you have to confirm your password first.</p>
            <div className="pb-4">
            <label>Confirm password : </label>
            <Input placeholder="Confirm your password" type="password" />
            </div>
            <Button backgroundColor="bg-[#ff0000]">Delete</Button>
</>
  )
}

export default DangerZone