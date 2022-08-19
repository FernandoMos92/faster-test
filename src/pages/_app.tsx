import React from 'react'
import type { AppProps } from 'next/app'
import GlobalStyle from '../styles/globals'

import { UserContextProvider } from '../Context/Context'

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <UserContextProvider>
      <Component {...pageProps} />
      <GlobalStyle />
    </UserContextProvider>
  )
}

export default MyApp
