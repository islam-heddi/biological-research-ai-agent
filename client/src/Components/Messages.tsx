import React from "react"
import type { MessageType } from "../types/types"
import {marked} from "marked"
import parse from "html-react-parser"

interface IMessages {
    messages: MessageType[]
}

function Messages({messages}: IMessages) {
    
  return (
    <div className=" flex flex-col">
        {messages.map((value,index) => <React.Fragment key={index}><div className={`${value.role === "user" ? "self-end bg-[#0f24]" : "self-start"} m-2 rounded-2xl  p-7 inline`}>{value.role==="system"?parse((marked(value.content) as string).replaceAll("*", "<br />")): value.content}</div></React.Fragment>)}   
    </div>
  )
}

export default Messages