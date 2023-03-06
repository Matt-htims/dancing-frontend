import { motion } from 'framer-motion'

const letters = ['D', 'A', 'N', 'C', 'I', 'N', 'G']

export default function PageIntro() {
  return (
    <div className="flex items-center justify-center pt-[25vh]  text-offWhite opacity-10">
      {letters.map((letter) => (
        <p key={letter} className="text-[280px] font-bold">
          {letter}
        </p>
      ))}
    </div>
  )
}
