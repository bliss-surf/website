"use client"

import {JetBrains_Mono} from "next/font/google"
import {motion} from "framer-motion"
import Aurora from './Aurora';
import Link from 'next/link';

const poppins=JetBrains_Mono({subsets:["latin"],weight:["400","600","700"]})

export default function NotFound(){
  return(
    <main className={`${poppins.className} min-h-screen bg-black text-neutral-100 relative`}>
      <div className="absolute inset-0 z-0" style={{ top: '-30%' }}>
        <Aurora
          colorStops={["#6b75db", "#8385db", "#a0a5db"]}
          blend={2.0}
          amplitude={0.5}
          speed={0.5}
        />
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 md:px-12 lg:px-20 py-8 sm:py-12 relative z-10">
        <motion.div 
          className="text-center space-y-6 sm:space-y-8"
          initial={{opacity: 0, y: -20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.4, ease: "easeInOut"}}
        >
          <h1 className="text-7xl sm:text-8xl md:text-9xl font-bold" style={{color: "#7f85fb"}}>404</h1>
          <p className="text-base sm:text-lg md:text-xl text-neutral-400">page not found</p>
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.4, delay: 0.2}}
          >
            <Link 
              href="/" 
              className="inline-block px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm md:text-base text-neutral-400 hover:text-[#6b75db] underline transition-colors duration-200"
            >
              ← back home
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </main>
  )
}
