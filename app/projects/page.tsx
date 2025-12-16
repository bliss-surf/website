"use client"

import {JetBrains_Mono} from "next/font/google"
import {motion} from "framer-motion"
import Aurora from '../Aurora';
import Link from 'next/link';

const poppins=JetBrains_Mono({subsets:["latin"],weight:["400","600","700"]})

export default function ProjectsPage(){
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
      <div className="flex flex-col items-center justify-center min-h-screen px-20 relative z-10">
        <motion.div 
          className="w-full max-w-md space-y-8"
          initial={{opacity: 0, y: -20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.4, ease: "easeInOut"}}
        >
          <motion.div
            className="border border-neutral-800 rounded-lg p-8 space-y-4 hover:border-neutral-700 transition-colors duration-200"
            whileHover={{scale: 1.02}}
            transition={{duration: 0.2}}
          >
            <div className="space-y-2">
              <h3 className="text-2xl font-bold" style={{color: "#7f85fb"}}>zuzu.rest</h3>
              <p className="text-sm text-neutral-500">12/16/2025</p>
            </div>
            <p className="text-neutral-300 leading-relaxed">
              anonymous, secure file hosting with a focus on privacy and speed.
            </p>
            <div className="flex gap-2 pt-2">
              <span className="text-xs px-2 py-1 bg-neutral-900 text-neutral-400 rounded">network</span>
              <span className="text-xs px-2 py-1 bg-neutral-900 text-neutral-400 rounded">proxy</span>
              <span className="text-xs px-2 py-1 bg-neutral-900 text-neutral-400 rounded">minecraft</span>
            </div>
          </motion.div>

          <div className="text-center">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-[#6b75db] transition-colors duration-200"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              back home
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
