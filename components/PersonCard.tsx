"use client"

import {motion, AnimatePresence} from "framer-motion"
import { useState, useEffect } from 'react';

export default function PersonCard({name,id}:{name:string,id:string}){
  const [roleIndex, setRoleIndex] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const [currentTime, setCurrentTime] = useState("")
  const [timeAgo, setTimeAgo] = useState("")
  const roles = ["owner", "head developer"]

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      
      const warsawTime = now.toLocaleString("en-US", {
        timeZone: "Europe/Warsaw",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      })
      setCurrentTime(warsawTime)
      
      const birthDate = new Date("2008-05-04T13:39:00+02:00")
      const diff = now.getTime() - birthDate.getTime()
      
      const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25))
      const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44))
      const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((diff % (1000 * 60)) / 1000)
      
      setTimeAgo(`${years}y ${months}m ${days}d ${hours}h ${minutes}m ${seconds}s`)
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return(
    <>
      <motion.div 
        className="flex items-center gap-2 sm:gap-3"
        initial={{opacity: 0, scale: 0.8}}
        animate={{opacity: 1, scale: 1}}
        transition={{duration: 0.3, ease: "easeInOut"}}
        whileHover={{scale: 1.05, transition: {duration: 0.15}}}
      >
        <motion.img
          src={`https://discord.bliss.surf/avatar/${id}`}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl cursor-pointer"
          whileHover={{scale: 1.15, rotate: 5}}
          transition={{duration: 0.15, ease: "easeInOut"}}
          onClick={() => setShowModal(true)}
        />
        <div className="leading-tight">
          <motion.button
            onClick={() => setShowModal(true)}
            className="font-medium text-xs sm:text-sm bg-none border-none p-0 cursor-pointer text-left"
            initial={{color: "#ffffff"}}
            whileHover={{color: "#736cd6"}}
            transition={{duration: 0.15, ease: "easeInOut"}}
          >
            {name}
          </motion.button>
          <div className="h-5 overflow-hidden w-24 sm:w-28">
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

      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50"
            style={{backgroundColor: "rgba(0, 0, 0, 0.08)"}}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            onClick={() => setShowModal(false)}
          >
            <motion.div
              className="border rounded-lg p-6 max-w-sm w-full mx-4"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                borderColor: "rgba(107, 117, 219, 0.4)"
              }}
              variants={{
                hidden: { 
                  scale: 0.9, 
                  opacity: 0, 
                  y: 20,
                  backdropFilter: "blur(0px)"
                },
                visible: { 
                  scale: 1, 
                  opacity: 1, 
                  y: 0,
                  backdropFilter: "blur(12px)"
                }
              }}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{
                scale: { duration: 0.2 },
                opacity: { duration: 0.2 },
                y: { duration: 0.2 },
                backdropFilter: { duration: 0.8, delay: 0.2, ease: "easeOut" }
              }}
              onClick={(e) => e.stopPropagation()}
              whileHover={{borderColor: "rgba(107, 117, 219, 0.6)"}}
            >
              <div className="flex items-center justify-between gap-4 mb-4">
                <motion.img
                  src={`https://discord.bliss.surf/avatar/${id}`}
                  className="w-14 h-14 rounded-lg flex-shrink-0"
                  whileHover={{scale: 1.05}}
                  transition={{duration: 0.2}}
                />
                <div className="flex-1 min-w-0">
                  <h2 className="text-base font-semibold" style={{color: "#7f85fb"}}>
                    {name}
                  </h2>
                  <p className="text-xs text-neutral-400 mt-0.5">founder @ bliss</p>
                  <p className="text-xs text-neutral-500 mt-1">Warsaw • {currentTime}</p>
                  <p className="text-xs text-neutral-500 mt-0.5">{timeAgo} ago</p>
                </div>
                <motion.button
                  onClick={() => setShowModal(false)}
                  className="flex-shrink-0 text-neutral-400 hover:text-[#6b75db] transition-colors duration-200"
                  whileHover={{scale: 1.05}}
                  whileTap={{scale: 0.95}}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6L6 18M6 6l12 12"/>
                  </svg>
                </motion.button>
              </div>
              <div className="flex gap-3 pt-2">
                <motion.a 
                  href="https://github.com/uIvPuGpT" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-[#6b75db] transition-colors duration-200"
                  whileHover={{scale: 1.2}}
                  whileTap={{scale: 0.95}}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12c0 5.303 3.438 9.8 8.205 11.385c.6.113.82-.258.82-.577c0-.285-.01-1.04-.015-2.04c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729c1.205.084 1.838 1.236 1.838 1.236c1.07 1.835 2.809 1.305 3.495.998c.108-.776.417-1.305.76-1.605c-2.665-.3-5.466-1.332-5.466-5.93c0-1.31.465-2.38 1.235-3.22c-.135-.303-.54-1.523.105-3.176c0 0 1.005-.322 3.3 1.23c.96-.267 1.98-.399 3-.405c1.02.006 2.04.138 3 .405c2.28-1.552 3.285-1.23 3.285-1.23c.645 1.653.24 2.873.12 3.176c.765.84 1.23 1.91 1.23 3.22c0 4.61-2.805 5.625-5.475 5.92c.42.36.81 1.096.81 2.22c0 1.606-.015 2.896-.015 3.286c0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                </motion.a>
                <motion.a 
                  href="https://wauhu.t.me" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-[#6b75db] transition-colors duration-200"
                  whileHover={{scale: 1.2}}
                  whileTap={{scale: 0.95}}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12a12 12 0 0 0 12-12A12 12 0 0 0 12 0zm4.962 7.224c.1-.002.321.023.465.14a.5.5 0 0 1 .171.325c.016.093.036.306.02.472c-.18 1.898-.962 6.502-1.36 8.627c-.168.9-.499 1.201-.82 1.23c-.696.065-1.225-.46-1.9-.902c-1.056-.693-1.653-1.124-2.678-1.8c-1.185-.78-.417-1.21.258-1.91c.177-.184 3.247-2.977 3.307-3.23c.007-.032.014-.15-.056-.212s-.174-.041-.249-.024q-.159.037-5.061 3.345q-.72.495-1.302.48c-.428-.008-1.252-.241-1.865-.44c-.752-.245-1.349-.374-1.297-.789q.04-.324.893-.663q5.247-2.286 6.998-3.014c3.332-1.386 4.025-1.627 4.476-1.635"/></svg>
                </motion.a>
                <motion.a 
                  href="https://discord.com/users/120088896561217536" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-[#6b75db] transition-colors duration-200"
                  whileHover={{scale: 1.2}}
                  whileTap={{scale: 0.95}}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M20.317 4.37a19.8 19.8 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.3 18.3 0 0 0-5.487 0a13 13 0 0 0-.617-1.25a.08.08 0 0 0-.079-.037A19.7 19.7 0 0 0 3.677 4.37a.1.1 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.08.08 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.08.08 0 0 0 .084-.028a14 14 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13 13 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10 10 0 0 0 .372-.292a.07.07 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.07.07 0 0 1 .078.01q.181.149.373.292a.077.077 0 0 1-.006.127a12.3 12.3 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.08.08 0 0 0 .084.028a19.8 19.8 0 0 0 6.002-3.03a.08.08 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.06.06 0 0 0-.031-.03M8.02 15.33c-1.182 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418m7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418"/></svg>
                </motion.a>
                <motion.a 
                  href="https://namemc.com/profile/Inequivalence" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-[#6b75db] transition-colors duration-200"
                  whileHover={{scale: 1.2}}
                  whileTap={{scale: 0.95}}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M0 0v24h24V0Zm4.8 4.8H16V8h3.2v11.2H16V8H8v11.2H4.8V8Z"/></svg>
                </motion.a>
                <motion.a 
                  href="https://steamcommunity.com/id/bs4/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-[#6b75db] transition-colors duration-200"
                  whileHover={{scale: 1.2}}
                  whileTap={{scale: 0.95}}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658a3.4 3.4 0 0 1 1.912-.59q.094.001.188.006l2.861-4.142V8.91a4.53 4.53 0 0 1 4.524-4.524c2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911l.004.159a3.39 3.39 0 0 1-3.39 3.396a3.41 3.41 0 0 1-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0M7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25a2.551 2.551 0 0 0 3.337-3.324a2.547 2.547 0 0 0-3.255-1.413l1.523.63a1.878 1.878 0 0 1-1.445 3.467zm11.415-9.303a3.02 3.02 0 0 0-3.015-3.015a3.015 3.015 0 1 0 3.015 3.015m-5.273-.005a2.264 2.264 0 1 1 4.531 0a2.267 2.267 0 0 1-2.266 2.265a2.264 2.264 0 0 1-2.265-2.265"/></svg>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
