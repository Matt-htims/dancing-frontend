import Head from 'next/head'
import '@/styles/globals.css'

import localFont from 'next/font/local'

const futuraPassata = localFont({
  src: '../public/fonts/FuturaPassata.ttf',
  variable: '--font-futura-passata',
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Dancing</title>
        <meta
          name="description"
          content="You can't drink wine when your mouth is full of objectives."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${futuraPassata.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </>
  )
}
