import {motion} from "framer-motion"

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
      <div className="flex gap-2 sm:gap-3">
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
