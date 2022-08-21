import React from 'react'

// Components import
import Aside from '../Aside'
import Header from '../Header'
import Home from './Home'
import MainComponent from '../MainComponent'

function HomePage () {
  return (
    <Home>
      <Aside />
      <div className='container__home-main'>
        <Header />
        <MainComponent />
      </div>
    </Home>
  )
}

export default HomePage
