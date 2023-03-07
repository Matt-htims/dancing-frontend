import { motion } from 'framer-motion'

// Animations
import {
  container,
  itemDown,
  itemUp,
  itemFade,
  fadeIn,
} from '@/animations/loader.js'

export default function Loader({ setLoading }) {
  return (
    <div className="loader">
      <motion.main
        variants={container}
        initial="hidden"
        animate="show"
        exit="exit"
        onAnimationComplete={() => setLoading(false)}
        className="m-[30px] h-[calc(100vh-59px)] overflow-hidden rounded-[20px] bg-secondary text-center"
      >
        <div className=" flex items-center justify-center pt-[32vh] pb-32 text-offWhite">
          <motion.div variants={itemFade}>
            <img
              src="./landing/D.svg"
              alt="D"
              className="w-[140.45px] pr-[0.24%]"
            />
          </motion.div>
          <motion.div variants={itemDown}>
            <img
              src="./landing/A.svg"
              alt="A"
              className="w-[179px] pr-[8.76%]"
            />
          </motion.div>
          <motion.div variants={itemUp}>
            <img
              src="./landing/N1.svg"
              alt="N"
              className=" w-[183.57px] pr-[15%]"
            />
          </motion.div>
          <motion.div variants={itemDown}>
            <img
              src="./landing/C.svg"
              alt="C"
              className="w-[158.68px] pr-[20.55%]"
            />
          </motion.div>
          <motion.div variants={itemUp}>
            <img
              src="./landing/I.svg"
              alt="I"
              className="w-[63.81px] pr-[43%]"
            />
          </motion.div>
          <motion.div variants={itemDown}>
            <img
              src="./landing/N2.svg"
              alt="N"
              className="w-[183.61px] pr-[15.13%]"
            />
          </motion.div>
          <motion.div variants={itemFade}>
            <img src="./landing/G.svg" alt="G" className="w-[170.87px]" />
          </motion.div>
        </div>
        <motion.h1
          variants={fadeIn}
          initial="hidden"
          animate="show"
          className="m-auto mt-4 max-w-site text-8xl"
        >
          You can't drink wine when your mouth is full of adjectives.
        </motion.h1>
      </motion.main>
    </div>
  )
}
