import React from "react"
import type { MessageType } from "../types/types"

interface IMessages {
    messages: MessageType[]
}

function Messages({messages}: IMessages) {
    
  return (
    <div className=" flex flex-col">
        {messages.map((value,index) => <React.Fragment key={index}><div className={` ${value.role === "user" ? "self-end bg-[#0f24]" : "self-start"} m-2 rounded-2xl  p-7 inline`}>{value.content}</div></React.Fragment>)}   
    </div>
  )
}

export default Messages