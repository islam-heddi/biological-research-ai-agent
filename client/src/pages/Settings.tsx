import { Settings as SettingsIcon } from "lucide-react"
import { Accordion } from "@szhsin/react-accordion";
import AccordionItems from "../Components/AccordionItems";
import UpdateName from "../Components/UpdateName";
import UpdateEmail from "../Components/UpdateEmail";
import UpdatePassword from "../Components/UpdatePassword";
import DangerZone from "../Components/DangerZone";

function SettingsPage() {
  return (
    <div className="space-y-8 px-4 py-6 lg:px-10">
      <div className="mx-auto max-w-6xl rounded-[32px] border border-white/10 bg-[#0b111f]/90 p-8 shadow-[0_30px_120px_-70px_rgba(17,255,0,0.4)] backdrop-blur-xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-[#11ff00]/20 to-transparent shadow-lg shadow-[#11ff00]/10">
              <SettingsIcon size={32} className="text-[#11ff00]" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#7af57a]">Account</p>
              <h1 className="mt-2 text-3xl font-semibold text-white">Settings</h1>
            </div>
          </div>
          <p className="max-w-2xl text-sm leading-6 text-slate-300">
            Customize your profile, security, and account preferences in one place. Every setting is designed for fast access with a crisp, modern interface.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl rounded-[32px] border border-white/10 bg-[#0c1220]/95 p-6 shadow-2xl shadow-[#11ff00]/10 backdrop-blur-xl">
        <Accordion allowMultiple allowZeroExpanded className="space-y-4">
          <AccordionItems header="Profile">
            <div className="space-y-4 text-slate-300">
              <p>Update your public profile information, including name and email.</p>
              <div className="space-y-4 rounded-3xl border border-white/5 bg-[#101826]/80 p-5">
                <Accordion allowMultiple allowZeroExpanded className="space-y-4">
                  <AccordionItems header="Name">
                    <UpdateName />
                  </AccordionItems>
                  <AccordionItems header="Email">
                    <UpdateEmail />
                  </AccordionItems>
                </Accordion>
              </div>
            </div>
          </AccordionItems>

          <AccordionItems header="Password">
            <div className="space-y-4 text-slate-300">
              <p>Secure your account by updating your password regularly.</p>
              <UpdatePassword />
            </div>
          </AccordionItems>

          <AccordionItems header="Danger zone">
            <div className="space-y-4 text-slate-300">
              <p>Danger zone actions are irreversible. Only continue if you understand the consequences.</p>
              <DangerZone />
            </div>
          </AccordionItems>
        </Accordion>
      </div>
    </div>
  )
}

export default SettingsPage