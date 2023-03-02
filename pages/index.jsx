import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Splash</title>
        <meta name="description" content="You can't drink wine when your mouth is full of objectives." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className='text-xl'>Hi there</h1>
      </main>
    </>
  )
}