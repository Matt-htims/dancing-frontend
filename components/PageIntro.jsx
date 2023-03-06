import { motion } from 'framer-motion'

const letters = ['D', 'A', 'N', 'C', 'I', 'N', 'G']

const letterSVGs = [
  { path: './landing/D.svg', rightPadding: '0.34px', alt: 'D' },
  { path: './landing/A.svg', rightPadding: '14.37px', alt: 'A' },
  { path: './landing/N1.svg', rightPadding: '24.09px', alt: 'N' },
  { path: './landing/C.svg', rightPadding: '27.05px', alt: 'C' },
  { path: './landing/I.svg', rightPadding: '27.42px', alt: 'I' },
  { path: './landing/N2.svg', rightPadding: '24.13px', alt: 'N' },
  { path: './landing/G.svg', rightPadding: '0px', alt: 'G' },
]

export default function PageIntro() {
  return (
    <div className="flex items-center justify-center pt-[25vh] text-offWhite opacity-10">
      {letterSVGs.map((letter) => (
        <img
          key={letter}
          src={letter.path}
          className={`pr-[${letter.rightPadding}]`}
        />
      ))}
      {/* <img src="./landing/D.svg" alt="D" className="pr-[0.24%]" />
      <img src="./landing/A.svg" alt="A" />
      <img src="./landing/N1.svg" alt="N" />
      <img src="./landing/C.svg" alt="C" />
      <img src="./landing/I.svg" alt="I" />
      <img src="./landing/N2.svg" alt="N" />
      <img src="./landing/G.svg" alt="G" /> */}
    </div>
  )
}
