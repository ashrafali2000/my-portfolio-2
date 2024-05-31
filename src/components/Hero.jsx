import { motion } from "framer-motion"
import { styles } from "../styles"
import { ComputersCanvas } from "./canvas"

const Hero = () => {
  return (
    <section className="relative w-full mx-auto h-screen">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex fle-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, Im <span className="text-[#915eff]">Ashraf Ali</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>Tech enthusiast wielding HTML, CSS, JS, ReactJS, NextJS, <br className="sm:block hidden" />and React Native.</p>
        </div>
      </div>
      <ComputersCanvas />
      <div className='absolute xs:bottom-[1rem] bottom-[1.3rem] w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[31px] h-[50px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 14, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero