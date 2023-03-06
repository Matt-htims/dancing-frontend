import '@/styles/globals.css'

import localFont from 'next/font/local'

const futuraPassata = localFont({
  src: '../public/fonts/FuturaPassata.ttf',
  variable: '--font-futura-passata',
})

export default function App({ Component, pageProps }) {
  return (
    <main className={`${futuraPassata.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  )
}
