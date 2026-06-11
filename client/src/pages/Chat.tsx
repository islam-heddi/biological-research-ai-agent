import { useEffect, useRef } from "react"
import MessageComponent from "../Components/MessageComponent"
import Messages from "../Components/Messages"
import type { MessageType } from "../types/types"

function Chat() {
  const MessageDivElement = useRef<HTMLDivElement>(null)
  useEffect(() => {
     if (MessageDivElement.current) {
      MessageDivElement.current.scrollTop = MessageDivElement.current.scrollHeight;
    }
  },[])
  const msgs: MessageType[] = [{
    role: "user",
    content: "hello world"
  },{
    role: "user",
    content: "hello world"
  },{
    role: "user",
    content: "hello world"
  },
  {
    role: "system",
    content: "This research introduces **Thousandfold Expansion Microscopy (1000ExM)**, a novel method designed to image individual protein residues with sub-nanometer precision using conventional light microscopy. **Key aspects:** * **Hypothesis:** The core idea is to physically separate individual amino acid residues by anchoring their side chains to a swellable polymer, then cleaving the protein backbone, allowing residues to expand far enough apart to be individually resolved. * **Methodology:** 1000ExM utilizes a sophisticated four-network interpenetrating hydrogel architecture. This enables successive expansion, achieving over 1000-fold linear expansion (a billion-fold in volume). * **Validation:** The method demonstrated that protein and peptide structures are maintained throughout this massive expansion, confirmed through analyses of known structures like nanobodies, GFP, and the mCLING peptide. * **Resolution:** Computational analysis indicates that 1000ExM can resolve adjacent amino acid residues, effectively achieving sub-nanometer resolution on standard light microscopes. * **Significance:** This technique holds substantial promise for unprecedented visualization and identification of proteins, potentially within their native cellular and tissue environments."
  },
  {
    role: "system",
    content: "This research introduces **Thousandfold Expansion Microscopy (1000ExM)**, a novel method designed to image individual protein residues with sub-nanometer precision using conventional light microscopy. **Key aspects:** * **Hypothesis:** The core idea is to physically separate individual amino acid residues by anchoring their side chains to a swellable polymer, then cleaving the protein backbone, allowing residues to expand far enough apart to be individually resolved. * **Methodology:** 1000ExM utilizes a sophisticated four-network interpenetrating hydrogel architecture. This enables successive expansion, achieving over 1000-fold linear expansion (a billion-fold in volume). * **Validation:** The method demonstrated that protein and peptide structures are maintained throughout this massive expansion, confirmed through analyses of known structures like nanobodies, GFP, and the mCLING peptide. * **Resolution:** Computational analysis indicates that 1000ExM can resolve adjacent amino acid residues, effectively achieving sub-nanometer resolution on standard light microscopes. * **Significance:** This technique holds substantial promise for unprecedented visualization and identification of proteins, potentially within their native cellular and tissue environments."
  }
]
  return (
    <div>
      <div ref={MessageDivElement} className="overflow-y-auto h-[85vh]">
        <Messages messages={msgs} />
      </div>
      <MessageComponent />
    </div>
  )
}

export default Chat