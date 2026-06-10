import { Settings } from "lucide-react"
import { Accordion} from "@szhsin/react-accordion";
import AccordionItems from "../Components/AccordionItems";
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
            <p>Name</p>
          </AccordionItems>
          
          <AccordionItems header="Email">
            <p>email</p>
          </AccordionItems>
          </Accordion>
        </AccordionItems>
        
        <AccordionItems header="Password">
            <p>change your password</p>
        </AccordionItems>
        
        <AccordionItems header="Danger zone">
          <p>delete your account</p>
        </AccordionItems>
      </Accordion>
      </div>
    </div>
  )
}

export default SettingsPage