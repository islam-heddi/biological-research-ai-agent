import { useState } from "react"
import Button from "./FlashButton"
import { Send, Sparkle } from "lucide-react"
import { useDispatch, useSelector } from "react-redux"
import type { Socket } from "socket.io-client"
import { useParams } from "react-router-dom"
import { toast } from "react-toastify"
import { addMsg } from "../context/ChatState"
import { updateThink } from "../context/ThinkState"
function MessageComponent() {
  const isThinking = useSelector((state: any) => state.think.value)
  const dispatch = useDispatch()
    const param = useParams();
    const id = param.id;
    const userId = useSelector((state: any) => state.auth.value.userId)
    const [message, setMessage] = useState<string>("")
    const socket: Socket<any> = useSelector((state: any) => state.socket.value)
    const handleSend = async () => {
      console.log(message)
      if(message.length < 1) {
        toast.error("Message is empty");
        return;
      }
      socket.emit("message", {
        content: message,
        role: "user",
        userId: userId as string,
        channelId: id as string
      })
      dispatch(addMsg({
        content: message,
        role: "user",
        userId: userId as string,
        channelId: id as string}))
      dispatch(updateThink(true))
      setMessage("");
    }
  return (
    <div className="flex flex-row gap-4 items-center">
        <textarea disabled={isThinking} value={message} className="outline-none focus:outline-none resize-none flex-9 bg-[#31313139] text-white p-3" placeholder="Enter your message" onChange={(e) => {
          console.log(e.target.value)
          setMessage(e.target.value)}}>{message}</textarea>
        <Button isDisabled={isThinking} onClick={() => handleSend()}>{isThinking? <Sparkle />: <Send />}</Button>
    </div>
  )
}

export default MessageComponent