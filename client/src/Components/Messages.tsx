import type { MessageType } from "../types/types"
import { marked } from "marked"
import parse from "html-react-parser"
import { useSelector } from "react-redux"
import Skeleton from "react-loading-skeleton"

function Messages() {
  const messages: MessageType[] = useSelector((state: any) => state.chat.value)
  const isThinking = useSelector((state: any) => state.think.value)

  return (
    <div className="flex flex-col gap-4">
      {messages.length < 1 && (
        <div className="rounded-3xl border border-dashed border-white/10 bg-white/5 p-8 text-center text-sm text-slate-400 shadow-sm shadow-black/20">
          Start the conversation and watch the AI respond in real time.
        </div>
      )}

      {messages.map((message, index) => {
        const isUser = message.role === "user"
        const content = message.role === "system"
          ? parse((marked(message.content) as string).replaceAll("*", "<br />"))
          : message.content

        return (
          <div
            key={`${message.role}-${index}`}
            className={`max-w-[85%] rounded-[28px] p-5 shadow-lg shadow-black/20 backdrop-blur-xl ${isUser ? "self-end bg-gradient-to-br from-[#00ff41]/15 to-[#00a6ff]/15 text-right text-[#e9f7ff]" : "self-start bg-[#11171f] text-[#d8d8d8]"}`}
          >
            <div className="mb-3 text-[11px] uppercase tracking-[0.24em] text-slate-500">
              {isUser ? "You" : "AI"}
            </div>
            <div className="whitespace-pre-wrap break-words text-sm leading-7">
              {content}
            </div>
          </div>
        )
      })}

      {isThinking && (
        <div className="rounded-3xl border border-dashed border-white/10 bg-[#0d121c] p-5 shadow-sm shadow-black/20">
          <Skeleton baseColor="#141b24" count={3} height={20} enableAnimation />
        </div>
      )}
    </div>
  )
}

export default Messages