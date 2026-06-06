import { Leaf } from "lucide-react"

function Footer() {
  return (
<footer className="border-t border-gray-900 py-12 px-6">
   <div className="max-w-7xl mx-auto text-center">
      <div className="flex items-center justify-center gap-2 mb-4">
         <Leaf color="#11ff00" />
         <span className="text-2xl font-black" style={{
        fontFamily: " &quot;JetBrains Mono&quot;, monospace"
      }}>ChatBio</span>
      </div>
      <p className="text-gray-600 text-sm" style={{
        fontFamily: " &quot;JetBrains Mono&quot;, monospace"
      }}>the next evolution in biological research • Built with Mechanical Sympathy</p>
   </div>
</footer>  )
}

export default Footer