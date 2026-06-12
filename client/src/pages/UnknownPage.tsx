import { Leaf } from "lucide-react"
import Button from "../Components/FlashButton"
import { useNavigate } from "react-router-dom"

function UnknownPage() {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col gap-10 items-center p-5">
      <div className="flex items-center gap-2">
        <Leaf size={"70px"} color="#11ff00" />
        <h1 className="text-7xl">ChatBio</h1>
      </div>
      <h3 className="text-red-800 text-7xl font-bold mb-4" style={{
            fontFamily: "'JetBrains Mono', monospace"
        }}>
            404
      </h3>
      <h3 className="text-red-800 text-2xl font-bold mb-4" style={{
            fontFamily: "'JetBrains Mono', monospace"
        }}>
            Unknown Page
      </h3>
      <Button onClick={() => navigate(-1)} backgroundColor="bg-yellow-500">Back from where you come</Button>
    </div>
  )
}

export default UnknownPage