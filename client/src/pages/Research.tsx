import { useEffect, useState, useTransition } from "react";
import { useParams } from "react-router-dom"
import { api } from "../api/api";
import { GET_RESEARCH_BY_ID } from "../api/endpoints.constants";
import Skeleton from "react-loading-skeleton";
import type { ResearchWithAi } from "../types/types";
import { toast } from "react-toastify";
import { CalendarFold, Captions, Cpu, TextInitial, Users } from "lucide-react";
function Research() {
  const param = useParams();
  const id = param.id
  const [loading, startTransition]= useTransition();
  const [data, setData] = useState<ResearchWithAi>()
  useEffect(() => {
    startTransition(async () => {
      try {
        const res = await api.get(GET_RESEARCH_BY_ID+id)
        setData(res.data)
        console.log(res.data)
      } catch (error) {
        console.log(error)
        toast.error("error when loading the research")
      }
    })
  },[])

  return (
    <div className="max-h-[calc(100vh-4rem)] overflow-y-auto pb-4">
      <h3 className="text-2xl font-bold mb-4" style={{
            fontFamily: "'JetBrains Mono', monospace"
        }}>
            {loading? <Skeleton baseColor='#0d0d0d5b' count={5} enableAnimation={true}/> : <div>
              <div className="flex flex-row gap-2 items-center">
                <Captions size={"50px"} color="#5cff77" />
              <h1 className="p-2 text-green-500">{data?.research.name}</h1>
              </div>
              <div className="flex items-center gap-3">
                <Users color="#5cff77" />
              <span className="text-2xl text-[#797979] font-semibold tracking-wider">
                  Authors
              </span>
              <div className="flex-1 h-px bg-[#7d7d7d]"></div>
              </div>
              <p className="text-gray-500 text-[20px] p-4">{data?.research.authors}</p>
              <div className="flex items-center gap-3">
                <TextInitial size={52} color="#5cff77" />
              <span className="text-2xl text-[#00ff41] font-semibold tracking-wider">
                  Abstract
              </span>
              <div className="flex-1 h-px bg-[#00ff41]/30"></div>
              </div>
              
              <p className="p-3.5 text-[20px]">{data?.research.abstractResearch}</p>
              <div className="p-4">
              
              <div>
              <div className="flex items-center gap-3">
                <Cpu size={52} color="#5cfffc" />
              <span className="text-2xl text-[#00ff41] font-semibold tracking-wider">
                  Ai explanation
              </span>
              <div className="flex-1 h-px bg-[#00ff41]/30"></div>
              </div>
                <p className="text-[20px]">{data?.AiExplanation}</p>

              </div>
              <div className="flex items-center gap-3">
              <span className="text-xs text-[#00ff41] font-semibold tracking-wider">
                  Date Research
              </span>
              <div className="flex-1 h-px bg-[#00ff41]/30"></div>
              </div>
              <div className="flex flex-row gap-2">

              <CalendarFold size={52} color="#5cfffc" />
              <p>{data?.research.dateResearch?.toString().split("T")[0]}</p>
              </div>
              
              </div>
              </div>}
        </h3>
    </div>
  )
}

export default Research