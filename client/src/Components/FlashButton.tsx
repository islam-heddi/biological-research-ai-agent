import React from 'react'

export default function Button({children, className, backgroundColor, onClick}: Readonly<{
    children: React.ReactNode;
    className?: string;
    backgroundColor?: string;
    onClick?: () => void;
}>) {
    
  return (
    <div className={className || ""}>
        <button onClick={onClick || (() => {})} className={`group relative px-8 py-4 ${backgroundColor || " bg-[#00ff41]"} text-[#0A0A0A] font-bold text-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,65,0.5)]`}>
            <span className="relative z-10 flex items-center gap-2" style={{
            fontFamily: "&quot;JetBrains Mono&quot;, monospace;"
        }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-zap w-5 h-5">
                <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                </svg>{children}</span>
                <div className="absolute inset-0 bg-white"  style={{
            transform: "scaleX(0)",
            transformOrigin: "0% 50% 0px"
        }}>
            </div>
        </button>
    </div>
  )
}
