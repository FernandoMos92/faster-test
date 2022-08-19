import React from 'react'
import { GetServerSideProps } from 'next'
import Aside from '../components/Aside/index'
// import Main from '../components/Main/index'

function Home ({ climate: { main: { temp } } }: any) {
  const defaultTemp: number = temp
  return (
    <>
      <Aside />
      {/* <Main temperature={defaultTemp} /> */}
    </>
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
