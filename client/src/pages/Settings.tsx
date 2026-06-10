import { Settings } from "lucide-react"
import { Accordion} from "@szhsin/react-accordion";
import AccordionItems from "../Components/AccordionItems";
import UpdateName from "../Components/UpdateName";
import UpdateEmail from "../Components/UpdateEmail";
import UpdatePassword from "../Components/UpdatePassword";
import DangerZone from "../Components/DangerZone";
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
            <UpdateEmail />
          </AccordionItems>
          </Accordion>
        </AccordionItems>
        
        <AccordionItems header="Password">
            <UpdatePassword />
        </AccordionItems>
        
        <AccordionItems header="Danger zone">
          <DangerZone />
        </AccordionItems>
      </Accordion>
      </div>
    </div>
  )
}

export default SettingsPage