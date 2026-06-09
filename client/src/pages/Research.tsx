import { useEffect, useTransition } from "react";
import { useParams } from "react-router-dom"
import { api } from "../api/api";
import { GET_RESEARCH_BY_ID } from "../api/endpoints.constants";
import Skeleton from "react-loading-skeleton";
function Research() {
  const param = useParams();
  const id = param.id
  const [loading, startTransition]= useTransition();
  useEffect(() => {
    startTransition(async () => {
      const res = await api.get(GET_RESEARCH_BY_ID+id)
      console.log(res)
    })
  },[])

  return (
    <div>
      <h3 className="text-2xl font-bold mb-4" style={{
            fontFamily: "'JetBrains Mono', monospace"
        }}>
            {loading? <Skeleton baseColor='#0d0d0d5b' count={5} enableAnimation={true}/> : <div></div>}
        </h3>
    </div>
  )
}

export default Research