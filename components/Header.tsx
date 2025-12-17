import {motion} from "framer-motion"

export default function Header(){
  return(
    <motion.header 
      className="space-y-4 sm:space-y-6 max-w-4xl text-left flex-1 flex flex-col justify-center w-full"
      initial={{opacity: 0, y: -20}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.4, ease: "easeInOut"}}
    >
      <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold" style={{color: "#7f85fb"}}>bliss.</h1>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-neutral-400 leading-relaxed">
        crafting modern web experiences.<br />
        check out our <a href="projects" className="underline hover:text-[#6b75db] transition-colors duration-200">projects</a>
      </p>
    </motion.header>
  )
}
