function CliWindow() {
    return (
 <div>
   <section className="py-24 px-6 bg-gradient-to-b from-transparent to-black/50">
      <div className="max-w-5xl mx-auto">
         <div>
            <div className="border border-[#00ff41] bg-black/80 backdrop-blur-sm overflow-hidden">
               <div className="flex items-center gap-2 px-4 py-3 bg-[#00ff41]/10 border-b border-[#00ff41]">
                  <div className="flex gap-2">
                     <div className="w-3 h-3 rounded-full bg-red-500"></div>
                     <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                     <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-[#00ff41] text-sm font-semibold ml-4" style={{ fontFamily: 'JetBrains Mono, monospace' }}>ChatBio-runtime • ENGINE ACTIVE</span>
               </div>
               <div className="p-6 h-80 overflow-hidden" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                  <div className="flex items-center gap-2 mb-4">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cpu w-5 h-5 text-[#00d4ff]">
                        <rect width="16" height="16" x="4" y="4" rx="2"></rect>
                        <rect width="6" height="6" x="9" y="9" rx="1"></rect>
                        <path d="M15 2v2"></path>
                        <path d="M15 20v2"></path>
                        <path d="M2 15h2"></path>
                        <path d="M2 9h2"></path>
                        <path d="M20 15h2"></path>
                        <path d="M20 9h2"></path>
                        <path d="M9 2v2"></path>
                        <path d="M9 20v2"></path>
                     </svg>
                     <span className="text-[#00d4ff] font-bold">Research available: 401</span>
                  </div>
                  <div className="space-y-2">
                     <div className="text-sm text-gray-300"><span className="text-[#00ff41]">&gt;</span> [SERVER] Collecting research data...</div>
                     <div className="text-sm text-gray-300"><span className="text-[#00ff41]">&gt;</span> [SERVER] Research data collected • 401 papers indexed</div>
                     <div className="text-sm text-gray-300"><span className="text-[#00ff41]">&gt;</span> [SERVER] Analysis complete • 401 papers processed</div>
                  </div>
                  <div className="inline-block w-2 h-4 bg-[#00ff41] mt-2"></div>
               </div>
            </div>
         </div>
      </div>
   </section>
</div>
    )
}

export default CliWindow