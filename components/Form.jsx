import { motion } from 'framer-motion'

const buttonContainer = {
  hidden: {
    opacity: 1,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
}

const buttonItem = {
  hidden: {
    y: 0,
    opacity: 1,
  },
  show: {
    opacity: 1,
    y: [null, 3, -3, 0],
    transition: {
      repeat: Infinity,
      // repeatType: 'mirror',
      repeatDelay: 0.8,
      ease: 'easeInOut',
      duration: 0.9,
    },
  },
}

const buttonText = [
  'J',
  'o',
  'i',
  'n',
  'space',
  't',
  'h',
  'e',
  'space',
  'd',
  'a',
  'n',
  'c',
  'e',
]

export default function Form() {
  return (
    <div className="relative z-50 m-auto my-0 max-w-6xl space-y-16">
      <div className="space-y-5 text-secondary">
        <p>
          Dancing is a mother-daughter vineyard in Sonoma. Our debut expression
          will launch in 2025.
        </p>
        <p>
          We hope to dismantle the culture that surrounds wine, from the open
          pretentiousness and formalities to the obscure and somewhat ridiculous
          vocabulary – making each sip less daunting for a new generation who
          are curious to explore.
        </p>
      </div>
      <div>
        <form
          className="font-base m-auto w-max space-x-5 border-b border-offWhite pb-3 font-bold"
          action="#"
        >
          <input
            className="w-80 bg-transparent placeholder-offWhite placeholder-opacity-20 outline-none"
            type="email"
            placeholder="Enter your email"
          />
          <motion.button
            variants={buttonContainer}
            initial="hidden"
            whileHover="show"
          >
            {buttonText.map((letter, i) =>
              letter != 'space' ? (
                <motion.p
                  className="inline-block"
                  variants={buttonItem}
                  key={i}
                  custom={i}
                >
                  {letter}
                </motion.p>
              ) : (
                <span key={i}>&nbsp;</span>
              ),
            )}
          </motion.button>
        </form>
      </div>
    </div>
  )
}
