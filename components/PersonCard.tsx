"use client"

import {motion,AnimatePresence} from "framer-motion"
import {useState,useEffect} from "react"

export default function PersonCard({name,id}:{name:string,id:string}){
  const [roleIndex,setRoleIndex]=useState(0)
  const [showModal,setShowModal]=useState(false)
  const [currentTime,setCurrentTime]=useState("")
  const roles=["owner","head developer"]

  useEffect(()=>{
    const i=setInterval(()=>setRoleIndex(p=>(p+1)%roles.length),3000)
    return()=>clearInterval(i)
  },[])

  useEffect(()=>{
    const update=()=>{
      setCurrentTime(
        new Date().toLocaleString("en-US",{
          timeZone:"Europe/Warsaw",
          hour:"2-digit",
          minute:"2-digit",
          second:"2-digit",
          hour12:false
        })
      )
    }
    update()
    const i=setInterval(update,1000)
    return()=>clearInterval(i)
  },[])

  return(
    <>
      <motion.div
        className="flex items-center gap-2 sm:gap-3"
        initial={{opacity:0,scale:.8}}
        animate={{opacity:1,scale:1}}
        transition={{duration:.3,ease:"easeInOut"}}
        whileHover={{scale:1.05,transition:{duration:.15}}}
      >
        <motion.img
          src={`https://api.lanyard.rest/${id}.png`}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl cursor-pointer"
          whileHover={{scale:1.15,rotate:5}}
          transition={{duration:.15,ease:"easeInOut"}}
          onClick={()=>setShowModal(true)}
        />
        <div className="leading-tight">
          <motion.button
            onClick={()=>setShowModal(true)}
            className="font-medium text-xs sm:text-sm p-0 cursor-pointer text-left"
            initial={{color:"#fff"}}
            whileHover={{color:"#736cd6"}}
            transition={{duration:.15,ease:"easeInOut"}}
          >
            {name}
          </motion.button>
          <div className="h-5 overflow-hidden w-24 sm:w-28">
            <motion.div
              key={roleIndex}
              initial={{y:20,opacity:0}}
              animate={{y:0,opacity:1}}
              exit={{y:-20,opacity:0}}
              transition={{duration:.3,ease:"easeInOut"}}
              className="text-xs text-neutral-500"
            >
              {roles[roleIndex]}
            </motion.div>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {showModal&&(
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50"
            style={{backgroundColor:"rgba(0,0,0,.08)"}}
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            onClick={()=>setShowModal(false)}
          >
            <motion.div
              className="border rounded-lg p-6 max-w-sm w-full mx-4"
              style={{backgroundColor:"rgba(0,0,0,.5)",borderColor:"rgba(107,117,219,.4)"}}
              variants={{
                hidden:{scale:.9,opacity:0,y:20,backdropFilter:"blur(0px)"},
                visible:{scale:1,opacity:1,y:0,backdropFilter:"blur(12px)"}
              }}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{
                scale:{duration:.2},
                opacity:{duration:.2},
                y:{duration:.2},
                backdropFilter:{duration:.8,delay:.2,ease:"easeOut"}
              }}
              onClick={e=>e.stopPropagation()}
              whileHover={{borderColor:"rgba(107,117,219,.6)"}}
            >
              <div className="flex items-center justify-between gap-4 mb-4">
                <motion.img
                  src={`https://api.lanyard.rest/${id}.png`}
                  className="w-14 h-14 rounded-lg flex-shrink-0"
                  whileHover={{scale:1.05}}
                  transition={{duration:.2}}
                />
                <div className="flex-1 min-w-0">
                  <h2 className="text-base font-semibold" style={{color:"#7f85fb"}}>{name}</h2>
                  <p className="text-xs text-neutral-400 mt-0.5">founder @ bliss</p>
                  <p className="text-xs text-neutral-500 mt-1">Warsaw • {currentTime}</p>
                </div>
                <motion.button
                  onClick={()=>setShowModal(false)}
                  className="flex-shrink-0 text-neutral-400 hover:text-[#6b75db]"
                  whileHover={{scale:1.05}}
                  whileTap={{scale:.95}}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6L6 18M6 6l12 12"/>
                  </svg>
                </motion.button>
              </div>

              <div className="flex gap-3 pt-2">
                {[
                  ["https://github.com/uIvPuGpT",GitHubIcon],
                  ["https://wauhu.t.me",TelegramIcon],
                  ["https://discord.com/users/120088896561217536",DiscordIcon],
                  ["https://namemc.com/profile/Inequivalence",NameMCIcon],
                  ["https://steamcommunity.com/id/bs4/",SteamIcon]
                ].map(([href,Icon],i)=>(
                  <motion.a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-[#6b75db]"
                    whileHover={{scale:1.2}}
                    whileTap={{scale:.95}}
                  >
                    <Icon/>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function GitHubIcon(){return(<svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12c0 5.303 3.438 9.8 8.205 11.385c.6.113.82-.258.82-.577c0-.285-.01-1.04-.015-2.04c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729c1.205.084 1.838 1.236 1.838 1.236c1.07 1.835 2.809 1.305 3.495.998c.108-.776.417-1.305.76-1.605c-2.665-.3-5.466-1.332-5.466-5.93c0-1.31.465-2.38 1.235-3.22c-.135-.303-.54-1.523.105-3.176c0 0 1.005-.322 3.3 1.23c.96-.267 1.98-.399 3-.405c1.02.006 2.04.138 3 .405c2.28-1.552 3.285-1.23 3.285-1.23c.645 1.653.24 2.873.12 3.176c.765.84 1.23 1.91 1.23 3.22c0 4.61-2.805 5.625-5.475 5.92c.42.36.81 1.096.81 2.22c0 1.606-.015 2.896-.015 3.286c0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>)}
function TelegramIcon(){return(<svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12a12 12 0 0 0 12-12A12 12 0 0 0 12 0z"/></svg>)}
function DiscordIcon(){return(<svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M20.317 4.37a19.8 19.8 0 0 0-4.885-1.515"/></svg>)}
function NameMCIcon(){return(<svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M0 0v24h24V0Z"/></svg>)}
function SteamIcon(){return(<svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M11.979 0"/></svg>)}
