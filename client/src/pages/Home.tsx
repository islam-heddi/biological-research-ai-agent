import { Link } from "react-router-dom"
import Card from "../Components/Card"
import CliWindow from "../Components/CliWindow"
import Button from "../Components/FlashButton"
import Footer from "../Components/Footer"
import NoctureCard from "../Components/NoctureCard"

export default function Home() {
  return (<>
    <div>
      <div className="absolute inset-0 z-0" style={{ backgroundImage: "linear-gradient(rgb(47, 47, 47) 1px, transparent 1px), linear-gradient(90deg, rgb(47, 47, 47) 1px, transparent 1px)", backgroundSize: "50px 50px" }}></div>
      <div className="flex flex-col items-center relative z-10">
          <h1 className="text-center text-6xl md:text-8xl font-black mb-6 leading-none tracking-tight"><span className="text-[#00ff41]">biology</span><br /><span className="text-[#00d4ff]">research AI agent System</span><br />for Best research.</h1>
          <p className="text-center font-['JetBrains Mono',monospace] text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">Check the latest trends of <span className="text-[#00ff41]">Biology</span> and <span className="text-[#00d4ff]">ask questions with AI</span>. Achieve high level of understanding.</p>
          <Link to={"/login"}>
            <Button flashIcon={true} className="p-4" onClick={() => console.log("Get Started clicked!")}>
              Get Started
            </Button>
          </Link>
      </div>
      <NoctureCard />
      <div className="flex flex-row flex-wrap items-center">
        <Card title="AI Agent to discuss" description="with our ai agent help your self to get into biology" className="p-7" icon="DNA"/>
        <Card title="Trend Research" description="in our website you can check the latest best research" className="p-7" icon="leaf"/>
        <Card title="AI can reabstract" description="in our website there is an AI agent that give you a total explaination about any research"  className="p-7" icon="Tree"/>
      </div>
      <div><CliWindow /></div>
      <Footer />
    </div>
    </>
  )
}
