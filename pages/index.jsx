import Head from 'next/head'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'

// Components
import PageIntro from '@/components/PageIntro'
import Form from '@/components/Form'
import Loader from '@/components/Loader'
import FallingWords from '@/components/FallingWords'

export default function Home() {
  const [loading, setLoading] = useState(true)

  const constraintsRef = useRef(null)

  return (
    <AnimatePresence>
      {loading ? (
        <motion.div key="loader">
          <Loader setLoading={setLoading} />
        </motion.div>
      ) : (
        <main className="m-[30px] overflow-hidden rounded-[20px] bg-main text-center">
          <PageIntro />

          <h1 className="relative z-50 m-auto mt-4 max-w-site text-8xl">
            You can't drink wine when your mouth is full of adjectives.
          </h1>
          <motion.div
            ref={constraintsRef}
            className="bg-gradient-to-b from-main to-black pt-[1000px]"
          >
            <div className="box-border flex min-h-[calc(100vh-60px)] flex-col items-center justify-center py-32">
              <h2 className="mb-32 text-2xl">
                We're all just trying to find ways to say,
                <span className="mt-5 block text-8xl text-main">
                  I love it.
                </span>
              </h2>
              <Form />
            </div>
            <FallingWords constraintsRef={constraintsRef} />
          </motion.div>
        </main>
      )}
    </AnimatePresence>
  )
}
