import { motion } from 'framer-motion'

const letters = ['D', 'A', 'N', 'C', 'I', 'N', 'G']

const word = 'DANCING'

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min
}

// animate={{
//   y: [
//     getRandomArbitrary(-140, 140),
//     getRandomArbitrary(-140, 140),
//     getRandomArbitrary(-140, 140),
//     getRandomArbitrary(-140, 140),
//     0,
//   ],
// }}

const wordAnimation = {
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
  hidden: {
    transition: {
      when: 'afterChildren',
    },
  },
}

const lettersAnimation = {
  hidden: { y: 0 },
  visible: {
    y: [null, -140, 140, -100, 100, -80, 0],
  },
}

export default function PageIntro() {
  return (
    <motion.div
      variants={wordAnimation}
      initial="hidden"
      animate="visible"
      className="flex h-[60vh] items-center justify-center  text-offWhite"
    >
      {letters.map((letter) => (
        <motion.p
          variants={lettersAnimation}
          // initial={{ y: 0 }}
          // animate={{
          //   y: [null, -140, 140, -100, 100, -80, 0],
          // }}
          transition={{
            duration: 2.4,
            // ease: 'easeInOut',
            type: 'spring',
            stiffness: 50,
          }}
          key={letter}
          className="text-[280px] font-bold"
        >
          {letter}
        </motion.p>
      ))}
    </motion.div>
  )
}
