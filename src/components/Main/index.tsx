import React, { useContext, useState } from 'react'
import Scalendar from '../../styles/Main'
import MyCalendar from '../Calendar/index'
import { UserContext } from '../../Context/Context'
import CardNewEvent from '../CardNewEvent/index'
import CardEvent from '../CardEvent/index'
import Schedule from '../Schedule/index'
import DetailsCard from '../DetailsCard/index'
import readLocalStorage from '../../utils/readLocalStorage'

function Main ({ temperature }:any) {
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

  return (
    <Scalendar>
      <MyCalendar />
      <section className='calendar__events'>
        <h2 className='calendar__events-title'>Next Event</h2>
        <CardEvent
          onClick={handleDetails}
        />
        {
          isDetailOpen && <DetailsCard elements={details} />
      }
      </section>
      <section className='calendar__daily'>
        <Schedule />
      </section>
      {
        isOpenModal && <CardNewEvent temperature={ temperature } />
      }
    </Scalendar>
  )
}

export default Main
