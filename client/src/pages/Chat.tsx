import { useEffect, useRef } from "react"
import MessageComponent from "../Components/MessageComponent"
import Messages from "../Components/Messages"
import { useParams } from "react-router-dom"
import { api } from "../api/api"
import { GET_MESSAGES_BY_CHANNEL } from "../api/endpoints.constants"
import { toast } from "react-toastify"
import { useDispatch, useSelector } from "react-redux"
import { updateChat } from "../context/ChatState"
import { updateThink } from "../context/ThinkState"

function Chat() {
  const dispatch = useDispatch()
  const messages = useSelector((state: any) => state.chat.value)
  const param = useParams();
  const id = param.id
  const MessageDivElement = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!id) return

    api.get(GET_MESSAGES_BY_CHANNEL + id)
      .then(res => {
        dispatch(updateChat(res.data))
        dispatch(updateThink(false))
      })
      .catch((err) => {
        toast.error("Can't load messages, try again later")
        console.error(err)
      })
  }, [id, dispatch])

  useEffect(() => {
    if (MessageDivElement.current) {
      MessageDivElement.current.scrollTop = MessageDivElement.current.scrollHeight
    }
  }, [messages])

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(0,255,90,0.14),_transparent_55%),linear-gradient(180deg,_#070707_0%,_#080a11_100%)] px-4 py-6">
      <div className="mx-auto max-w-5xl rounded-[32px] border border-white/10 bg-[#0b0d11]/80 p-6 shadow-2xl shadow-[#00ff41]/10 backdrop-blur-xl">
        <div className="mb-6 flex flex-col gap-3 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm shadow-black/10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-white">Channel Chat</h1>
            <p className="mt-1 text-sm text-slate-400">Modern messaging with real-time AI responses.</p>
          </div>
          <div className="rounded-2xl bg-[#09110e] px-4 py-2 text-xs uppercase tracking-[0.24em] text-[#8cff9a] shadow-inner shadow-black/20">
            Live
          </div>
        </div>

        <div ref={MessageDivElement} className="mb-4 max-h-[72vh] overflow-y-auto rounded-[28px] border border-white/10 bg-[#11151f]/80 p-4 shadow-inner shadow-black/30">
          <Messages />
        </div>

        <div className="rounded-[28px] border border-white/10 bg-[#0f1720]/90 p-4 shadow-xl shadow-[#00ff41]/10">
          <MessageComponent />
        </div>
      </div>
    </div>
  )
}

export default Chat