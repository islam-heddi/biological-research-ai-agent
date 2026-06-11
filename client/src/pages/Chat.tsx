import MessageComponent from "../Components/MessageComponent"
import Messages from "../Components/Messages"
import type { MessageType } from "../types/types"

function Chat() {
  const msgs: MessageType[] = [{
    role: "user",
    content: "hello world"
  },{
    role: "user",
    content: "hello world"
  },{
    role: "user",
    content: "hello world"
  },
]
  return (
    <div>
      <Messages messages={msgs} />
      <MessageComponent />
    </div>
  )
}

export default Chat