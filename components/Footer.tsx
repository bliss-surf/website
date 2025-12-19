import {motion} from "framer-motion"
import { useEffect, useState } from "react"

interface StatusData {
  bliss_surf_website?: { ok: boolean; responseTime: number }
}

function StatusIndicator() {
  const [status, setStatus] = useState<boolean | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await fetch("https://status.bliss.surf/status")
        const data: StatusData = await response.json()
        setStatus(data.bliss_surf_website?.ok ?? false)
      } catch {
        setStatus(false)
      } finally {
        setLoading(false)
      }
    }

    fetchStatus()
    const interval = setInterval(fetchStatus, 30000)
    return () => clearInterval(interval)
  }, [])

  return (
    <a
      href="https://status.bliss.surf/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
    >
      {loading ? (
        <div className="w-2 h-2 bg-neutral-700 rounded-full animate-pulse" />
      ) : (
        <div
          className={`w-2 h-2 rounded-full transition-colors ${
            status ? "bg-green-500" : "bg-red-500"
          }`}
        />
      )}
      {loading ? (
        <div className="w-20 h-3 bg-neutral-800 rounded animate-pulse" />
      ) : (
        <span className="text-xs sm:text-sm text-neutral-500">
          {status ? "operational" : "offline"}
        </span>
      )}
    </a>
  )
}

export default function Footer(){
  return(
    <motion.section 
      className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-4 sm:left-6 md:left-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 md:gap-8"
      initial={{opacity: 0, x: -50}}
      animate={{opacity: 1, x: 0}}
      transition={{duration: 0.4, delay: 0.2, ease: "easeInOut"}}
    >
      <div className="flex items-center gap-2">
        <svg width="16" height="16" viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg" className="sm:w-5 sm:h-5">
          <defs>
            <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#9395FF"/>
              <stop offset="100%" stopColor="#7679FF"/>
            </linearGradient>
          </defs>
          <rect width="160" height="160" rx="32" fill="#0B0B10"/>
          <g fill="none" stroke="url(#g)" strokeWidth="10" strokeLinecap="round">
            <path d="M40 90c20 20 60 20 80 0"/>
            <path d="M40 70c20-20 60-20 80 0" opacity="0.6"/>
          </g>
        </svg>
        <div className="text-xs sm:text-sm text-neutral-500">2025 bliss.surf™</div>
      </div>
      <div className="flex gap-3 sm:gap-4 items-center">
        <StatusIndicator />
        <div className="hidden sm:block w-px h-3 bg-neutral-800" />
        <a 
          href="https://discord.gg/surfer" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-xs sm:text-sm text-neutral-400 hover:text-[#6b75db] underline transition-colors duration-200"
        >
          discord
        </a>
        <a 
          href="https://x.com/blissdotsurf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-xs sm:text-sm text-neutral-400 hover:text-[#6b75db] underline transition-colors duration-200"
        >
          twitter
        </a>
        <a 
          href="https://github.com/bliss-surf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-xs sm:text-sm text-neutral-400 hover:text-[#6b75db] underline transition-colors duration-200"
        >
          github
        </a>
      </div>
    </motion.section>
  )
}
