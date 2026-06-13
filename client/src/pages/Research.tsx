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
      } catch (error) {
        console.log(error)
        toast.error("error when loading the research")
      }
    })
  },[])

  return (
    <div className="max-h-[calc(100vh-4rem)] overflow-y-auto pb-6 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {loading ? (
          <Skeleton baseColor="#0d0d0d5b" count={5} enableAnimation={true} />
        ) : (
          <div className="space-y-8" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            <header className="rounded-3xl border border-[#2f2f2f] bg-[#090b0f]/90 p-5 sm:p-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                <Captions size={48} color="#5cff77" />
                <h1 className="text-xl font-bold text-green-500 sm:text-3xl lg:text-4xl">
                  {data?.research.name}
                </h1>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Users color="#5cff77" />
                <span className="text-lg text-[#797979] font-semibold tracking-wider">Authors</span>
                <div className="h-px bg-[#7d7d7d] flex-1" />
              </div>

              <p className="mt-4 text-base leading-7 text-gray-400 sm:text-lg">
                {data?.research.authors}
              </p>
            </header>

            <section className="rounded-3xl border border-[#2f2f2f] bg-[#090b0f]/90 p-5 sm:p-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <TextInitial size={44} color="#5cff77" />
                <span className="text-xl font-semibold text-[#00ff41] tracking-wider sm:text-2xl">
                  Abstract
                </span>
              </div>

              <p className="mt-4 text-base leading-7 sm:text-lg">{data?.research.abstractResearch}</p>
            </section>

            <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
              <section className="rounded-3xl border border-[#2f2f2f] bg-[#090b0f]/90 p-5 sm:p-6">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Cpu size={44} color="#5cfffc" />
                  <span className="text-xl font-semibold text-[#00ff41] tracking-wider sm:text-2xl">
                    AI explanation
                  </span>
                </div>

                <p className="mt-4 text-base leading-7 sm:text-lg">{data?.AiExplanation}</p>
              </section>

              <section className="rounded-3xl border border-[#2f2f2f] bg-[#090b0f]/90 p-5 sm:p-6">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                    <span className="text-sm uppercase text-[#00ff41] font-semibold tracking-wider">
                      Date Research
                    </span>
                    <div className="h-px bg-[#00ff41]/30 flex-1" />
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <CalendarFold size={44} color="#5cfffc" />
                    <p className="text-base sm:text-lg">
                      {data?.research.dateResearch?.toString().split("T")[0]}
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Research