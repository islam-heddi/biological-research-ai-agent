import { Activity, Dna, Leaf, TreeDeciduous } from "lucide-react";
import { useEffect, useState} from "react";

interface ICard {
    title: string;
    className: string;
    icon: string;
    description: string;
}

function Card({
    className,
    icon,
    title,
    description
}: Readonly<ICard>) {
    const [pic, setPic] = useState<any>(<Activity color="#11ff00" />)

    useEffect(() => {
        if(icon == "leaf") {
            setPic(<Leaf color="#11ff00" />)
        }else if (icon == "DNA"){
            setPic(<Dna color="#11ff00" />)
        } else if (icon == "Tree") {
            setPic(<TreeDeciduous color="#11ff00" />)
        }
    }, [icon])

  return (
    <div className={ className || "bg-black" }>
        <div className="relative border border-gray-800 bg-black/30 p-8 hover:border-[#00ff41] transition-all duration-300 group" style={{
            opacity: "1",
            transform: "none"
        }}>
        <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#00ff41] to-[#00d4ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        </div>
        {pic}
        <h3 className="text-2xl font-bold mb-4" style={{
            fontFamily: "'JetBrains Mono', monospace"
        }}>
            {title}
        </h3>
        <div className="space-y-3 mb-4">
        <div className="flex items-center gap-3">
            <span className="text-xs text-[#00ff41] font-semibold tracking-wider">
                ChatBio
            </span>
        <div className="flex-1 h-px bg-[#00ff41]/30"></div>
        </div>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
            {description}
        </p>
        </div>
    </div>
  )
}

export default Card