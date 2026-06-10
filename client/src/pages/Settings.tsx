import { Settings } from "lucide-react"
import { Accordion} from "@szhsin/react-accordion";
import AccordionItems from "../Components/AccordionItems";
import Input from "../Components/Input";
import Button from "../Components/FlashButton";
import UpdateName from "../Components/UpdateName";
function SettingsPage() {

  return (
    <div>
      <div className="flex flex-row gap-2 items-center">
        <Settings size={"40px"} color="#11ff00" />
        <h1>Settings</h1>
      </div>
      <div className="bg-white text-black mt-4">

      <Accordion>
        <AccordionItems header="Profile">
          <p>Here you can change your name and your email.</p>
          <Accordion>

          <AccordionItems header="Name">
            <UpdateName />
          </AccordionItems>
          
          <AccordionItems header="Email">
            <div className="pb-4">
            <label>Email : </label>
            <Input placeholder="Enter your new email" type="text" />
          
            <label>Confirm password : </label>
            <Input placeholder="Confirm your password" type="password" />
            </div>
            <Button>Save Changes</Button>
          </AccordionItems>
          </Accordion>
        </AccordionItems>
        
        <AccordionItems header="Password">
            <p>change your password</p>
            <div className="pb-4">
            <label>Current Password : </label>
            <Input placeholder="Enter your current password" type="password" />
          
            <label>New Password : </label>
            <Input placeholder="Enter your new password" type="password" />
          
            <label>Confirm new password : </label>
            <Input placeholder="Confirm your new password" type="password" />
            </div>
            <Button>Save Changes</Button>
        </AccordionItems>
        
        <AccordionItems header="Danger zone">
          <p>delete your account, you have to confirm your password first.</p>
          <div className="pb-4">
            <label>Confirm password : </label>
            <Input placeholder="Confirm your password" type="password" />
            </div>
            <Button backgroundColor="bg-[#ff0000]">Delete</Button>
        </AccordionItems>
      </Accordion>
      </div>
    </div>
  )
}

export default SettingsPage