import { useEffect } from 'react'
import { motion } from 'framer-motion'

const letters = ['D', 'A', 'N', 'C', 'I', 'N', 'G']

const container = {
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
    },
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: 'easeInOut',
      staggerChildren: 0.1,
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

const item = {
  hidden: { y: 0 },
  show: {
    y: [null, -140, 140, -140, 140, -140, 0],
    transition: {
      duration: 1.5,
      type: 'spring',
      stiffness: 50,
    },
  },
  exit: {
    opacity: 0.1,
    color: '#FBF2EA',
    transition: {
      ease: 'easeInOut',
      duration: 0.8,
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
        <div className=" flex items-center justify-center pt-[25vh]  text-offWhite">
          {letters.map((letter) => (
            <motion.p
              variants={item}
              key={letter}
              className="text-[280px] font-bold"
            >
              {letter}
            </motion.p>
          ))}
        </div>
      </motion.main>
    </div>
  )
}
