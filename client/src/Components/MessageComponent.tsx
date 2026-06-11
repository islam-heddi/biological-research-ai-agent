import { useState } from "react"
import Button from "./FlashButton"
import { Send } from "lucide-react"
function MessageComponent() {
    const [message, setMessage] = useState<string>("")

    const handleSend = async () => {
      
    }
  return (
    <div className="flex flex-row gap-4 items-center">
        <textarea className="outline-none focus:outline-none resize-none flex-9 bg-[#31313139] text-white p-3" placeholder="Enter your message" onChange={(e) => setMessage(e.target.value)}>{message}</textarea>
        <Button onClick={() => console.log(message)}><Send /></Button>
    </div>
  )
}

export default MessageComponent