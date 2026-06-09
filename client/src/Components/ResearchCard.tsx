import type { ResearchType } from "../types/types"

interface IResearchCard {
    research: ResearchType
}

function ResearchCard({research} : IResearchCard) {
  return (
    <div className="pr-2 cursor-pointer">
         <div className={"bg-black"}>
        <div className="relative border border-gray-800 bg-black/30 p-8 hover:border-[#00ff41] transition-all duration-300 group" style={{
            opacity: "1",
            transform: "none"
        }}>
        <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#00ff41] to-[#00d4ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        </div>
        <h3 className="text-2xl font-bold mb-4" style={{
            fontFamily: "'JetBrains Mono', monospace"
        }}>
            {research.name}
        </h3>
        <div className="space-y-3 mb-4">
        <div className="flex items-center gap-3">
            <span className="text-xs text-[#00ff41] font-semibold tracking-wider">
                authors
            </span>
        <div className="flex-1 h-px bg-[#00ff41]/30"></div>
        </div>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
            {research.authors}
        </p>
        
        <div className="space-y-3 mb-4">
        <div className="flex items-center gap-3">
            <span className="text-xs text-[#00ff41] font-semibold tracking-wider">
                Research date
            </span>
        <div className="flex-1 h-px bg-[#00ff41]/30"></div>
        </div>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
            {research.dateResearch?.toString().split("T")[0] ||""}
        </p>
      </div>
        
    </div>
    </div>
  )
}

export default ResearchCard