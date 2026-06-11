import { useEffect, useRef, useState } from "react"
import MessageComponent from "../Components/MessageComponent"
import Messages from "../Components/Messages"
import type { MessageType } from "../types/types"
import { useParams } from "react-router-dom"
import { api } from "../api/api"
import { GET_MESSAGES_BY_CHANNEL } from "../api/endpoints.constants"
import { toast } from "react-toastify"
import { useDispatch } from "react-redux"
import { updateChat } from "../context/ChatState"

function Chat() {
  const dispatch = useDispatch()
  const [data, setData] = useState<MessageType[]>([])
  const param = useParams();
  const id = param.id
  const MessageDivElement = useRef<HTMLDivElement>(null)

  useEffect(() => {
    api.get(GET_MESSAGES_BY_CHANNEL+id)
    .then(res => {
      setData(res.data)
      dispatch(updateChat(res.data))
    })
    .catch((err) => {
      toast.error("cant load the messages, try again later");
      console.log(err)
    })
  },[])

  useEffect(() => {
     if (MessageDivElement.current) {
      MessageDivElement.current.scrollTop = MessageDivElement.current.scrollHeight;
    }
  },[])
  return (
    <div>
      <div ref={MessageDivElement} className="overflow-y-auto h-[85vh]">
        <Messages messages={data} />
      </div>
      <MessageComponent />
    </div>
  )
}

export default Chat