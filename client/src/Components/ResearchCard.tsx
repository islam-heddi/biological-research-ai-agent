import type { ResearchType } from "../types/types"

interface IResearchCard {
    research: ResearchType
}

function ResearchCard({research} : IResearchCard) {
  return (
    <div>
        <h1>{research.name}</h1>
        <p>{research.authors}</p>
        <p>{research.dateResearch?.toString() || ""}</p>
    </div>
  )
}

export default ResearchCard