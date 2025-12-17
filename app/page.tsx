"use client"

import {JetBrains_Mono} from "next/font/google"
import {motion} from "framer-motion"
import Aurora from './Aurora';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PersonCard from '@/components/PersonCard';

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
      <div className="flex flex-col items-center justify-between min-h-screen px-4 sm:px-8 md:px-12 lg:px-20 py-8 sm:py-12 md:py-16 lg:py-20 relative z-10">
        <Header />

        <Footer />

        <motion.section 
          className="absolute bottom-6 sm:bottom-8 md:bottom-10 right-4 sm:right-8 md:right-12 lg:right-20 flex gap-4 sm:gap-6 md:gap-8"
          initial={{opacity: 0, x: 50}}
          animate={{opacity: 1, x: 0}}
          transition={{duration: 0.4, delay: 0.1, ease: "easeInOut"}}
        >
          <PersonCard name="lucian" id="120088896561217536"/>
        </motion.section>
      </div>
    </main>
  )
}
