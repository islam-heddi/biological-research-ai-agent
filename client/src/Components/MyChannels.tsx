import { useEffect, useState, useTransition } from "react"
import { api } from "../api/api"
import { GET_CHANNELS, UPDATE_CHANNEL } from "../api/endpoints.constants"
import type { ChannelType } from "../types/types"
import React from "react"
import ChannelCard from "./ChannelCard"
import Popup from "./Popup"
import Input from "./Input"
import Button from "./FlashButton"
import { toast } from "react-toastify"
function MyChannels() {
    const [data,setData] = useState<ChannelType[]>([])
    useEffect(() => {
        api.get(GET_CHANNELS)
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    },[])
  const [isOpenedPopUp, setIsOpenedPopUp] = useState<boolean>(false)
  const [channelName, setChannelName] = useState<string>("")
  const [loading, startTransition] = useTransition();
  const handleUpdateChannel = async (id: string) => {
    try {
      if(!channelName) {
        toast.error("Channel name is required")
        return;
      }
      startTransition(async () => {
        try {
          const res = await api.patch(UPDATE_CHANNEL+id, {
            name: channelName
          })
          toast.success("channel updated successfully");
          setChannelName("")
          window.location.reload()
        } catch (error: any) {
          toast.error(error.response.data)
        }
      })
    } catch (error: any) {
      toast.error(error)
    }
    
    
  }

  return (
    <div className='m-6 overflow-y-auto h-[80vh]'>
      {data.length < 1? <h1>No channel has been created.</h1>:data.sort((a,b) => (new Date(b.createdAt).getTime()) - (new Date(a.createdAt).getTime()) ).map((value, index) => <React.Fragment key={index}>
      <ChannelCard updateWithFunction={() => setIsOpenedPopUp(true)} channel={value} />
      <Popup 
        isOpen={isOpenedPopUp} 
        onClose={() => {setIsOpenedPopUp(!isOpenedPopUp); setChannelName(value.name)}} 
        title="Update Channel"
      >
        <div className="flex flex-col gap-2">
          <Input value={channelName} onChange={(e) => setChannelName(e.target.value)} type="text" placeholder="Enter the channel name" />
          <Button isDisabled={loading} onClick={() => handleUpdateChannel(value._id)}>{loading? "Loading...": "Update"}</Button>
        </div>
      </Popup>
    </React.Fragment>)}</div>
  )
}

export default MyChannels