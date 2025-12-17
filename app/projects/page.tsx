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
      <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 md:px-12 lg:px-20 py-8 sm:py-12 relative z-10">
        <motion.div 
          className="w-full flex items-center justify-center gap-6"
          initial={{opacity: 0, y: -20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.4, ease: "easeInOut"}}
        >
          <motion.div
            className="hidden lg:block w-full max-w-md border border-neutral-800 rounded-lg p-8 space-y-4 opacity-20 pointer-events-none"
            initial={{opacity: 0}}
            animate={{opacity: 0.2}}
            transition={{duration: 0.6, delay: 0.2}}
          >
            <div className="space-y-2">
              <div className="h-6 bg-neutral-800 rounded w-32"></div>
              <div className="h-4 bg-neutral-800 rounded w-24"></div>
            </div>
            <div className="space-y-2">
              <div className="h-4 bg-neutral-800 rounded"></div>
              <div className="h-4 bg-neutral-800 rounded w-5/6"></div>
            </div>
            <div className="flex gap-2 pt-2">
              <div className="h-6 bg-neutral-800 rounded w-12"></div>
              <div className="h-6 bg-neutral-800 rounded w-12"></div>
            </div>
          </motion.div>

          <div className="w-full max-w-md space-y-6 sm:space-y-8">
          <Link href="https://zuzu.rest" target="_blank" rel="noopener noreferrer">
            <motion.div
              className="border border-neutral-800 rounded-lg p-8 space-y-4 hover:border-neutral-700 transition-colors duration-200 cursor-pointer"
              whileHover={{scale: 1.02}}
              transition={{duration: 0.2}}
            >
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold" style={{color: "#7f85fb"}}>zuzu.rest</h3>
                <p className="text-xs sm:text-sm text-neutral-500">12/16/2025</p>
              </div>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                anonymous, secure file hosting with a focus on privacy and speed.
              </p>
              <div className="flex gap-2 pt-2 items-center justify-between">
                <div className="flex gap-2">
                  <span className="text-xs px-2 py-1 bg-neutral-900 text-neutral-400 rounded">files</span>
                  <span className="text-xs px-2 py-1 bg-neutral-900 text-neutral-400 rounded">security</span>
                  <span className="text-xs px-2 py-1 bg-neutral-900 text-neutral-400 rounded">hosting</span>
                </div>
                <div className="flex gap-2">
                  <motion.a
                    href="https://zuzu.rest"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-2 py-1 bg-neutral-900 text-neutral-400 hover:text-[#6b75db] rounded transition-colors duration-200 flex items-center gap-1"
                    whileHover={{scale: 1.05}}
                    whileTap={{scale: 0.95}}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    open
                  </motion.a>
                  <motion.a
                    href="https://github.com/bliss-surf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-2 py-1 bg-neutral-900 text-neutral-400 hover:text-[#6b75db] rounded transition-colors duration-200 flex items-center gap-1"
                    whileHover={{scale: 1.05}}
                    whileTap={{scale: 0.95}}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12c0 5.303 3.438 9.8 8.205 11.385c.6.113.82-.258.82-.577c0-.285-.01-1.04-.015-2.04c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729c1.205.084 1.838 1.236 1.838 1.236c1.07 1.835 2.809 1.305 3.495.998c.108-.776.417-1.305.76-1.605c-2.665-.3-5.466-1.332-5.466-5.93c0-1.31.465-2.38 1.235-3.22c-.135-.303-.54-1.523.105-3.176c0 0 1.005-.322 3.3 1.23c.96-.267 1.98-.399 3-.405c1.02.006 2.04.138 3 .405c2.28-1.552 3.285-1.23 3.285-1.23c.645 1.653.24 2.873.12 3.176c.765.84 1.23 1.91 1.23 3.22c0 4.61-2.805 5.625-5.475 5.92c.42.36.81 1.096.81 2.22c0 1.606-.015 2.896-.015 3.286c0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                    github
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </Link>

          </div>

          <motion.div
            className="hidden lg:block w-full max-w-md border border-neutral-800 rounded-lg p-8 space-y-4 opacity-20 pointer-events-none"
            initial={{opacity: 0}}
            animate={{opacity: 0.2}}
            transition={{duration: 0.6, delay: 0.3}}
          >
            <div className="space-y-2">
              <div className="h-6 bg-neutral-800 rounded w-32"></div>
              <div className="h-4 bg-neutral-800 rounded w-24"></div>
            </div>
            <div className="space-y-2">
              <div className="h-4 bg-neutral-800 rounded"></div>
              <div className="h-4 bg-neutral-800 rounded w-5/6"></div>
            </div>
            <div className="flex gap-2 pt-2">
              <div className="h-6 bg-neutral-800 rounded w-12"></div>
              <div className="h-6 bg-neutral-800 rounded w-12"></div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="text-center pt-6 sm:pt-8"
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 0.4, delay: 0.5}}
        >
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-neutral-400 hover:text-[#6b75db] transition-colors duration-200"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            back home
          </Link>
        </motion.div>
      </div>
    </main>
  )
}
