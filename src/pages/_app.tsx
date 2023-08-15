import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react"
import { Goerli } from '@thirdweb-dev/chains'


export default function App({ Component, pageProps }: AppProps) {
  return(
  <ThirdwebProvider activeChain="goerli" clientId="ec5b14eb7226eb33aa777941f4a63efd">
   <Component {...pageProps} />

  </ThirdwebProvider>
  )
}

