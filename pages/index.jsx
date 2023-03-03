import Head from 'next/head'
import Image from 'next/image'

// Components
import PageIntro from '@/components/PageIntro'
import Form from '@/components/Form'

export default function Home() {
  return (
    <>
      <Head>
        <title>Splash</title>
        <meta
          name="description"
          content="You can't drink wine when your mouth is full of objectives."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="m-[30px] overflow-hidden rounded-[20px] bg-main text-center">
        <PageIntro />

        <h1 className="m-auto max-w-site text-8xl">
          You can't drink wine when your mouth is full of adjectives.
        </h1>
        <div className="falling-section bg-gradient-to-b from-main to-black pt-[1000px] pb-64">
          <h2 className="mb-32 text-2xl">
            We're all just trying to find ways to say,
            <span className="mt-5 block text-8xl text-main">I love it.</span>
          </h2>
          <Form />
        </div>
      </main>
    </>
  )
}
