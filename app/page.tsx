"use client"

import {JetBrains_Mono} from "next/font/google"
import {motion} from "framer-motion"
import Aurora from './Aurora';
import { useState, useEffect } from 'react';

const poppins=JetBrains_Mono({subsets:["latin"],weight:["400","600","700"]})

export default function Page(){
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
      <div className="flex flex-col items-center justify-between min-h-screen px-20 py-20 relative z-10">
        <motion.header 
          className="space-y-6 max-w-4xl text-left flex-1 flex flex-col justify-center"
          initial={{opacity: 0, y: -20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.4, ease: "easeInOut"}}
        >
          <h1 className="text-9xl font-bold" style={{color: "#7f85fb"}}>bliss.</h1>
          <p className="text-xl text-neutral-400 leading-relaxed">
            crafting modern web experiences.<br />
            check out our <a href="projects" className="underline hover:text-[#6b75db] transition-colors duration-200">projects</a>
          </p>
        </motion.header>

        <motion.section 
          className="absolute bottom-10 left-10 flex items-center gap-8"
          initial={{opacity: 0, x: -50}}
          animate={{opacity: 1, x: 0}}
          transition={{duration: 0.4, delay: 0.2, ease: "easeInOut"}}
        >
          <div className="flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
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
            <div className="text-sm text-neutral-500">2025 bliss.surf™</div>
          </div>
          <div className="flex gap-2">
            <a 
              href="https://discord.gg/surfer" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-neutral-400 hover:text-[#6b75db] underline transition-colors duration-200"
            >
              discord
            </a>
            <a 
              href="https://x.com/blissdotsurf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-neutral-400 hover:text-[#6b75db] underline transition-colors duration-200"
            >
              twitter
            </a>
          </div>
        </motion.section>

        <motion.section 
          className="absolute bottom-10 right-20 flex gap-8"
          initial={{opacity: 0, x: 50}}
          animate={{opacity: 1, x: 0}}
          transition={{duration: 0.4, delay: 0.1, ease: "easeInOut"}}
        >
          <Person name="lucian" id="120088896561217536"/>
        </motion.section>
      </div>
    </main>
  )
}

function Person({name,id}:{name:string,id:string}){
  const [roleIndex, setRoleIndex] = useState(0)
  const roles = ["owner", "head developer"]

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return(
    <motion.div 
      className="flex items-center gap-3"
      initial={{opacity: 0, scale: 0.8}}
      animate={{opacity: 1, scale: 1}}
      transition={{duration: 0.3, ease: "easeInOut"}}
      whileHover={{scale: 1.05, transition: {duration: 0.15}}}
    >
      <motion.img
        src={`https://api.lanyard.rest/${id}.png`}
        className="w-12 h-12 rounded-xl"
        whileHover={{scale: 1.15, rotate: 5}}
        transition={{duration: 0.15, ease: "easeInOut"}}
      />
      <div className="leading-tight">
        <motion.p 
          className="font-medium text-sm"
          initial={{color: "#ffffff"}}
          whileHover={{color: "#736cd6"}}
          transition={{duration: 0.15, ease: "easeInOut"}}
        >
          {name}
        </motion.p>
        <div className="h-5 overflow-hidden w-28">
          <motion.div
            key={roleIndex}
            initial={{y: 20, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            exit={{y: -20, opacity: 0}}
            transition={{duration: 0.3, ease: "easeInOut"}}
            className="text-xs text-neutral-500"
          >
            {roles[roleIndex]}
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
