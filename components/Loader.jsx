import { useEffect } from 'react'
import { motion } from 'framer-motion'

const letters = ['D', 'A', 'N', 'C', 'I', 'N', 'G']

const container = {
  hidden: {
    opacity: 1,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
  exit: {
    backgroundColor: '#F57A73',
    height: '2000px',
    transition: {
      duration: 1,
    },
  },
}

const itemDown = {
  hidden: { y: 0 },
  show: {
    y: 50,
    transition: {
      duration: 3,
      ease: 'easeInOut',
    },
  },
  exit: {
    opacity: 0.1,
    transition: {
      ease: 'easeInOut',
      duration: 1,
    },
  },
}

const itemUp = {
  hidden: { y: 0 },
  show: {
    y: -50,
    transition: {
      duration: 3,
      ease: 'easeInOut',
    },
  },
  exit: {
    opacity: 0.1,
    transition: {
      ease: 'easeInOut',
      duration: 1,
    },
  },
}

const itemFade = {
  hidden: { y: 0 },
  show: {
    y: 0,
    transition: {
      duration: 3,
      ease: 'easeInOut',
    },
  },
  exit: {
    opacity: 0.1,
    transition: {
      ease: 'easeInOut',
      duration: 1,
    },
  },
}

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
        <div className=" flex items-center justify-center pt-[32vh]  text-offWhite">
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
      </motion.main>
    </div>
  )
}
