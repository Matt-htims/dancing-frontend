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

const fallContainer = {
  hidden: {
    opacity: 1,
    transition: {},
  },
  show: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.3,
      duration: 0,
    },
  },
}

const fallSpring = {
  hidden: {
    y: -3000,
  },
  show: {
    y: 0,
    transition: {
      type: 'spring',
      damping: 100,
      mass: 100,
      stiffness: 30,
      //   duration: 5,
    },
  },
}

const fall = {
  hidden: {
    y: -3000,
  },
  show: {
    y: 0,
    transition: {
      ease: 'easeInOut',
      duration: 10,
    },
  },
}

export default function FallingWords({ constraintsRef }) {
  return (
    <motion.div
      variants={fallContainer}
      initial="hidden"
      animate="show"
      className="relative bottom-14 z-0 w-full"
    >
      {words.map((word, i) => (
        <motion.div
          drag
          dragConstraints={constraintsRef}
          dragSnapToOrigin={true}
          dragTransition={{
            bounceDamping: 50,
            bounceStiffness: 50,
            bounceMass: 30,
          }}
          custom={i}
          variants={fall}
          className="w-full"
        >
          <p
            className={`$ absolute z-0 text-right text-4xl uppercase ${
              leftMarginValues[randomArrayValue(leftMarginValues)]
            } ${rotateValues[randomArrayValue(rotateValues)]} text-${
              colors[randomArrayValue(colors)]
            }`}
          >
            {word}
          </p>
        </motion.div>
      ))}
      <div className="left-[5%] left-[10%] left-[15%] left-[20%] left-[25%] left-[30%] left-[35%] left-[40%] left-[45%] left-[50%] left-[55%] left-[60%] left-[65%] left-[70%] left-[75%] left-[80%] left-[85%] left-[90%] text-blue text-yellow"></div>
    </motion.div>
  )
}
