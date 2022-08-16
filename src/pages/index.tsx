import React from 'react'
import Header from '../components/Header/index'
import Aside from '../components/Aside/index'
import Main from '../components/Main/index'
import { UserContextProvider } from '../Context/Context'

function Home () {
  return (
    <UserContextProvider>
      <Aside />
      <Header />
      <Main />
    </UserContextProvider>
  )
}

export default Home
