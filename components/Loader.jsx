import { useEffect } from 'react'
import { motion } from 'framer-motion'

const letters = ['D', 'A', 'N', 'C', 'I', 'N', 'G']

const container = {
  hidden: {
    transition: {
      when: 'afterChildren',
    },
  },
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const item = {
  hidden: { y: 0 },
  show: {
    y: [null, -140, 140, -100, 100, -80, 0],
    transition: {
      duration: 2.4,
      type: 'spring',
      stiffness: 50,
    },
  },
}

export default function Loader({ setLoading }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 4000)
    return () => clearTimeout(timer)
  })
  return (
    <main className="m-[30px] h-[calc(100vh-59px)] overflow-hidden rounded-[20px] bg-secondary text-center">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex h-[60vh] items-center justify-center  text-offWhite"
      >
        {letters.map((letter) => (
          <motion.p
            variants={item}
            key={letter}
            className="text-[280px] font-bold"
          >
            {letter}
          </motion.p>
        ))}
      </motion.div>
    </main>
  )
}
