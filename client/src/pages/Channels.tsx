import { AppWindow } from "lucide-react"
import MyChannels from "../Components/MyChannels"
import Button from "../Components/FlashButton"
import Popup from "../Components/Popup"
import { useState, useTransition } from "react"
import Input from "../Components/Input"
import { toast } from "react-toastify"
import { api } from "../api/api"
import { CREATE_CHANNEL } from "../api/endpoints.constants"
import { useNavigate } from "react-router-dom"
function Channels() {
  const [isOpenedPopUp, setIsOpenedPopUp] = useState<boolean>(false)
  const [channelName, setChannelName] = useState<string>("")
  const [loading, startTransition] = useTransition();
  const navigate = useNavigate()
  const handleCreateChannel = async () => {
    try {
      if(!channelName) {
        toast.error("Channel name is required")
        return;
      }
      startTransition(async () => {
        try {
          const res = await api.post(CREATE_CHANNEL, {
            name: channelName
          })
          toast.success("channel created successfully");
          navigate("/chat/"+res.data._id)
        } catch (error: any) {
          toast.error(error.response.data)
        }
      })
    } catch (error: any) {
      toast.error(error)
    }
    
    
  }
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
          <Input value={channelName} onChange={(e) => setChannelName(e.target.value)} type="text" placeholder="Enter the channel name" />
          <Button isDisabled={loading} onClick={() => handleCreateChannel()}>{loading? "Loading...": "Create"}</Button>
        </div>
      </Popup>
    </div>
  )
}

export default Channels