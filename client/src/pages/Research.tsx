import { useParams } from "react-router-dom"
function Research() {
  const param = useParams();
  const id = param.id


  return (
    <div>
      <h3 className="text-2xl font-bold mb-4" style={{
            fontFamily: "'JetBrains Mono', monospace"
        }}>
            research {id}
        </h3>
    </div>
  )
}

export default Research