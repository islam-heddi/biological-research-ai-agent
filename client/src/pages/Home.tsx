import NoctureCard from "../Components/NoctureCard"

export default function Home() {
  return (<>
    <div>
        <div className="absolute inset-0 z-0" style={{ backgroundImage: "linear-gradient(rgb(47, 47, 47) 1px, transparent 1px), linear-gradient(90deg, rgb(47, 47, 47) 1px, transparent 1px)", backgroundSize: "50px 50px" }}></div>
        <div className="flex flex-col items-center relative z-10">
            <h1 className="text-center text-6xl md:text-8xl font-black mb-6 leading-none tracking-tight">The <span className="text-[#00ff41]">Cybernetic</span><br /><span className="text-[#00d4ff]">Immune System</span><br />for High-Frequency Software</h1>
            <p className="text-center font-['JetBrains Mono',monospace] text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">Replace legacy mutation testing with <span className="text-[#00ff41]">Algebraic Topology</span> and <span className="text-[#00d4ff]">Mechanical Sympathy</span>. Achieve deterministic code immunity at kernel-level precision.</p>
        </div>
        <NoctureCard />
        <div>

        </div>
    </div>
    </>
  )
}
