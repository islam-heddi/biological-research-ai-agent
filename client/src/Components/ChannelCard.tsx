import { useNavigate } from "react-router-dom"
import type { ChannelType } from "../types/types"
import { Recycle, Trash2 } from "lucide-react"
import { api } from "../api/api";
import { DELETE_CHANNEL } from "../api/endpoints.constants";
import { toast } from "react-toastify";

interface IChannelCard {
    channel: ChannelType;
    updateWithFunction?: () => void;
}

function ChannelCard({channel, updateWithFunction} : IChannelCard) {
    const navigate = useNavigate()
    const handleDelete = (id: string) => {
        api.delete(DELETE_CHANNEL+id)
        .then(() => window.location.reload())
        .catch(err => toast.error(err.response.data))
    }
  return (
    <div className="pr-2 cursor-pointer m-4">
         <div className={"bg-black flex flex-row items-center"}>
        <div onClick={() => navigate(`/chat/${channel._id}`)}  className="flex-9 relative border border-gray-800 bg-black/30 p-8 hover:border-[#00ff41] transition-all duration-300 group" style={{
            opacity: "1",
            transform: "none"
        }}>
        <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#00ff41] to-[#00d4ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        </div>
        <h3 className="text-2xl font-bold mb-4" style={{
            fontFamily: "'JetBrains Mono', monospace"
        }}>
            {channel.name}
        </h3>
        <div className="space-y-3 mb-4">
        <div className="flex items-center gap-3">
            <span className="text-xs text-[#00ff41] font-semibold tracking-wider">
                Research date
            </span>
        <div className="flex-1 h-px bg-[#00ff41]/30"></div>
        </div>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
            {channel.createdAt?.toString().split("T")[0] ||""}
        </p>
      </div>
        
        <div className="flex flex-col gap-4 p-4">
            <Recycle color="#00ff59" onClick={updateWithFunction} className="hover:bg-gray-600"/>
            <Trash2 onClick={() => handleDelete(channel._id)} color="#ff0000" className="hover:bg-gray-600"/>
        </div>
    </div>
    </div>
  )
}

export default ChannelCard