import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {  ThirdwebProvider } from "@thirdweb-dev/react"

export default function App({ Component, pageProps }: AppProps) {
  return(
  <ThirdwebProvider activeChain="goerli" clientId="ec5b14eb7226eb33aa777941f4a63efd">
   <Component {...pageProps} />

  </ThirdwebProvider>
  )
}

