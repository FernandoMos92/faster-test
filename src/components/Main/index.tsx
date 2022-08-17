import React, { useContext } from 'react'
import Scalendar from '../../styles/Main'
import MyCalendar from '../Calendar/index'
import { UserContext } from '../../Context/Context'
import CardNewEvent from '../CardNewEvent/index'
import CardEvent from '../CardEvent/index'
import Schedule from '../Schedule/index'

function Main () {
  const { isOpenModal } = useContext(UserContext)

  return (
    <Scalendar>
      <MyCalendar />
      <section className='calendar__events'>
        <h2 className='calendar__events-title'>Next Event</h2>
        <CardEvent />
      </section>
      <section className='calendar__daily'>
        <Schedule />
      </section>
      {
        isOpenModal && <CardNewEvent />
      }
    </Scalendar>
  )
}

export default Main
