import { useCallback, useState, type KeyboardEvent } from "react"
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
  const param = useParams()
  const id = param.id
  const userId = useSelector((state: any) => state.auth.value.userId)
  const [message, setMessage] = useState<string>("")
  const socket: Socket<any> = useSelector((state: any) => state.socket.value)

  const handleSend = useCallback(async () => {
    if (!message.trim()) {
      toast.error("Message is empty")
      return
    }

    socket.emit("message", {
      content: message.trim(),
      role: "user",
      userId: userId as string,
      channelId: id as string,
    })

    dispatch(addMsg({
      content: message.trim(),
      role: "user",
      userId: userId as string,
      channelId: id as string,
    }))
    dispatch(updateThink(true))
    setMessage("")
  }, [dispatch, id, message, socket, userId])

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
      event.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h2 className="text-sm font-semibold text-white">Send a new message</h2>
          <p className="text-xs text-slate-500">Use Ctrl+Enter to submit while typing.</p>
        </div>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
        <textarea
          disabled={isThinking}
          value={message}
          rows={4}
          className="min-h-30 w-full rounded-3xl border border-white/10 bg-[#10161f]/90 px-4 py-4 text-sm text-white outline-none transition focus:border-[#00ff41] focus:ring-2 focus:ring-[#00ff41]/20 resize-none"
          placeholder="Ask a question, tell the AI what you need, or continue the conversation..."
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <Button isDisabled={isThinking} onClick={handleSend} className="w-full sm:w-auto">
          {isThinking ? <Sparkle /> : <Send />}
          <span>{isThinking ? "Thinking..." : "Send"}</span>
        </Button>
      </div>
    </div>
  )
}

export default MessageComponent