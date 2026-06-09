import 'react-loading-skeleton/dist/skeleton.css'
import { useEffect, useState, useTransition } from "react"
import { api } from "../api/api";
import { GET_RESEARCHS } from "../api/endpoints.constants";
import { toast } from "react-toastify";
import type { ResearchType } from "../types/types";
import Skeleton from "react-loading-skeleton";
import React from "react";
import ResearchCard from "../Components/ResearchCard";

function Researchs() {
  const [loading, startTransition] = useTransition();
  const [researchs, setResearchs] = useState<ResearchType[]>([])
  useEffect(() => {
    startTransition(async () => {
      try {
        const res = await api.get(GET_RESEARCHS)
        setResearchs(res.data)
      } catch (error) {
        toast.error("cant load researchs")
      }

    })
  },[])

  return (
    <div>
      {loading? <Skeleton baseColor='#0d0d0d5b' count={5} enableAnimation={true}/> : researchs.map((value, index) => <React.Fragment key={index}>
        <ResearchCard research={value}/>
      </React.Fragment>)}

    </div>
  )
}

export default Researchs