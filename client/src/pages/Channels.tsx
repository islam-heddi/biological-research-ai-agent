import { AppWindow } from "lucide-react"
import MyChannels from "../Components/MyChannels"
import Button from "../Components/FlashButton"
import Popup from "../Components/Popup"
import { useState } from "react"
import Input from "../Components/Input"
function Channels() {
  const [isOpenedPopUp, setIsOpenedPopUp] = useState<boolean>(false)
  return (
    <div>
      <div className="flex flex-row items-center flex-wrap justify-between">
        <div className="flex flex-row gap-4 items-center">
          <AppWindow color="#11ff00" size={"40px"} />
          <h1 className="text-[40px]">Channels</h1>
        </div>
        <Button onClick={() => setIsOpenedPopUp(true)}>+ New Channel</Button>
      </div>
      <MyChannels />
       <Popup 
        isOpen={isOpenedPopUp} 
        onClose={() => {setIsOpenedPopUp(!isOpenedPopUp)}} 
        title="Create Channel"
      >
        <div className="flex flex-col gap-2">
          <Input type="text" placeholder="Enter the channel name" />
          <Button>Create</Button>
        </div>
      </Popup>
    </div>
  )
}

export default Channels