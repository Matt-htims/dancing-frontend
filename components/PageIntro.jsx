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
    <div className="flex items-center justify-center pt-[32vh] text-offWhite opacity-10">
      {/* {letterSVGs.map((letter) => (
        <img
          key={letter}
          src={letter.path}
          className={`pr-[${letter.rightPadding}]`}
        />
      ))} */}
      <div>
        <img
          src="./landing/D.svg"
          alt="D"
          className="w-[140.45px] pr-[0.24%]"
        />
      </div>
      <div>
        <img src="./landing/A.svg" alt="A" className="w-[179px] pr-[8.76%]" />
      </div>
      <div>
        <img
          src="./landing/N1.svg"
          alt="N"
          className=" w-[183.57px] pr-[15%]"
        />
      </div>
      <div>
        <img
          src="./landing/C.svg"
          alt="C"
          className="w-[158.68px] pr-[20.55%]"
        />
      </div>
      <div>
        <img src="./landing/I.svg" alt="I" className="w-[63.81px] pr-[43%]" />
      </div>
      <div>
        <img
          src="./landing/N2.svg"
          alt="N"
          className="w-[183.61px] pr-[15.13%]"
        />
      </div>
      <div>
        <img src="./landing/G.svg" alt="G" className="w-[170.87px]" />
      </div>
    </div>
  )
}
