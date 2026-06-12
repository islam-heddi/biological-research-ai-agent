import React from 'react'

export default function Button({isDisabled, type, flashIcon, children, className, backgroundColor, textColor, onClick}: Readonly<{
    children: React.ReactNode;
    className?: string;
    backgroundColor?: string;
    textColor?: string;
    flashIcon?: boolean;
    type?: "button" | "reset" | "submit";
    isDisabled?: boolean;
    onClick?: () => void;
}>) {
  return (
    <div className={className || ""}>
      <button
        disabled={isDisabled || false}
        type={type}
        onClick={onClick || (() => {})}
        className={`group relative inline-flex items-center justify-center rounded-full px-7 py-3 ${backgroundColor || "bg-[#00ff41]"} ${textColor || "text-[#0A0A0A]"} font-semibold transition-all duration-300 shadow-lg shadow-[#00ff41]/20 hover:-translate-y-0.5 hover:shadow-[#00ff41]/35 disabled:cursor-not-allowed disabled:opacity-60`}
      >
        <span className="relative z-10 flex items-center gap-2">
          {flashIcon ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap w-5 h-5">
              <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
            </svg>
          ) : null}
          {children}
        </span>
      </button>
    </div>
  )
}
