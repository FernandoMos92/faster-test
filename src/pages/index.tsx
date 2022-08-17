import React, { useEffect } from 'react'
import { GetServerSideProps } from 'next'
import Header from '../components/Header/index'
import Aside from '../components/Aside/index'
import Main from '../components/Main/index'
import { UserContextProvider } from '../Context/Context'

function Home(props) {
  console.log('🚀 -> props', props)
  useEffect(() => {
    localStorage.setItem('events', JSON.stringify([]))
  })
  return (
    <UserContextProvider>
      <Aside />
      <Header />
      <Main />
    </UserContextProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const myKEY = 'f833b279a543c62aae02994fbeb7b3b8'
  const city = 'São Paulo'
  const URL_API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myKEY}&units=metric`
  const request = await fetch(URL_API)
  const response = await request.json()
  return {
    props: {
      climate: response
    }
  }
}

export default Home
