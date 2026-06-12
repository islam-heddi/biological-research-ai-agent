import React from "react"
import type { MessageType } from "../types/types"
import {marked} from "marked"
import parse from "html-react-parser"
import { useSelector } from "react-redux"
import Skeleton from "react-loading-skeleton"


function Messages() {
    const messages: MessageType[] = useSelector((state: any) => state.chat.value)
    const isThinking = useSelector((state: any) => state.think.value);
  return (
    <div className=" flex flex-col">
      {messages.length < 1? "Start a message": ""}
        {messages.map((value,index) => <React.Fragment key={index}><div className={`${value.role === "user" ? "self-end bg-[#0f24]" : "self-start"} m-2 rounded-2xl  p-7 inline`}>{value.role==="system"?parse((marked(value.content) as string).replaceAll("*", "<br />")): value.content}</div></React.Fragment>)}   
      {isThinking? <Skeleton baseColor='#0d0d0d5b' count={5} enableAnimation={true}/>: <></>}   
    </div>
  )
}

export default Messages