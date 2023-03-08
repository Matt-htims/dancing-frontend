import { motion } from 'framer-motion'

const colors = ['offWhite', 'secondary', 'blue', 'yellow']

const rotateValues = [
  'rotate-2',
  'rotate-3',
  'rotate-6',
  'rotate-12',
  '-rotate-2',
  '-rotate-3',
  '-rotate-6',
  '-rotate-12',
]

const leftMarginValues = [
  'left-auto',
  'left-auto',
  'left-[5%]',
  'left-[10%]',
  'left-[15%]',
  'left-[20%]',
  'left-[25%]',
  'left-[30%]',
  'left-[35%]',
  'left-[40%]',
  'left-[45%]',
  'left-[50%]',
  'left-[55%]',
  'left-[60%]',
  'left-[65%]',
  'left-[70%]',
  'left-[75%]',
  'left-[80%]',
  'left-[85%]',
]

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomArrayValue(array) {
  return Math.floor(Math.random() * array.length)
}

const words = [
  'Sweet',
  'Round',
  'Mineral',
  'Caramel',
  'Spicy',
  'Floral',
  'Smooth',
  'Citrus',
  'Buttery',
  'Fruity',
  'Woody',
  'Jammy',
  'Full bodied',
  'Earthy',
  'Nutty',
  'Tannic',
  'Balanced',
  'Bright',
]

// Animations
import {
  fallContainer,
  fall1,
  fall2,
  fallSpring1,
  fallSpring2,
} from '@/animations/fallingWords.js'

export default function FallingWords({ constraintsRef }) {
  return (
    <motion.div
      variants={fallContainer}
      initial="hidden"
      animate="show"
      className="relative z-0 w-full"
    >
      {words.map((word, i) => (
        <motion.div
          key={i + 1}
          drag
          //   whileDrag={{ scale: 1.2 }}
          //   dragConstraints={constraintsRef}
          //   dragSnapToOrigin={true}
          //   dragTransition={{
          //     bounceDamping: 50,
          //     bounceStiffness: 50,
          //     // bounceMass: 30,
          //   }}
          custom={i}
          variants={i % 2 == 0 ? fall1 : fall2}
          className="w-full"
        >
          <p
            className={`$ absolute z-0 text-right text-4xl uppercase bottom-${
              i < 5 ? 1 : i - 4 < 13 ? i - 4 : 14
            } ${leftMarginValues[randomArrayValue(leftMarginValues)]} ${
              rotateValues[randomArrayValue(rotateValues)]
            } text-${colors[randomArrayValue(colors)]}`}
          >
            {word}
          </p>
        </motion.div>
      ))}
      <div className="left-[5%] left-[10%] left-[15%] left-[20%] left-[25%] left-[30%] left-[35%] left-[40%] left-[45%] left-[50%] left-[55%] left-[60%] left-[65%] left-[70%] left-[75%] left-[80%] left-[85%] left-[90%] bottom-1 bottom-2 bottom-3 bottom-4 bottom-5 bottom-6 bottom-7 bottom-8 bottom-9 bottom-10 bottom-11 bottom-12 bottom-14 hidden text-blue text-yellow"></div>
    </motion.div>
  )
}
