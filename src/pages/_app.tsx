import React from 'react'
import type { AppProps } from 'next/app'
import GlobalStyle from '../styles/globals'

import { UserContextProvider } from '../Context/UserContext'

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <UserContextProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </UserContextProvider>
  )
}

export default MyApp
