import React, { useContext, useState } from 'react'
import MyCalendar from '../Calendar'
import NextEvents from '../NextEvents'
import Schedule from '../Schedule'
import Main from './Main'

import { UserContext } from '../../Context/UserContext'
import CardNewEvent from '../CardNewEvent'
import readLocalStorage from '../../utils/readLocalStorage'
import DetailsCard from '../DetailsCard'

function MainComponent () {
  const { isOpenModal, isDetailOpen, setIsDetailOpen } = useContext(UserContext)
  const [details, setDetails] = useState({
    title: '',
    description: '',
    date: Date,
    hour: '',
    id: 0,
    location: '',
    minute: ''
  })

  function handleDetails ({ target }) {
    const elementsLocal = readLocalStorage()
    console.dir(target)
    elementsLocal.forEach((el) => {
      if (el.id === parseInt(target.id)) {
        const { date, description, hour, id, location, minute, title } = el
        setDetails({
          title,
          description,
          hour,
          id,
          location,
          minute,
          date
        })
      }
      if (!isDetailOpen) setIsDetailOpen(true)
    })
  }

  console.log('🚀 -> details', details)

  return (
    <Main>
      <section className='mainComponent__left'>
        {isOpenModal && <CardNewEvent />}
        <MyCalendar />
        <label htmlFor='nextEvent' className='nextEvent'>
          Next Event
        </label>
        {/* {
          isDetailOpen && <DetailsCard elements={ details } />
        } */}
        <NextEvents onClick={ handleDetails }/>
      </section>
      <hr className='mainComponent__separatorLine' />
      <section className='mainComponent__right'>
        <Schedule />
      </section>
    </Main>
  )
}

export default MainComponent
