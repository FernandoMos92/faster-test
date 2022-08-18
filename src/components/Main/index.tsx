import React, { useContext } from 'react'
import Scalendar from '../../styles/Main'
import MyCalendar from '../Calendar/index'
import { UserContext } from '../../Context/Context'
import CardNewEvent from '../CardNewEvent/index'
import CardEvent from '../CardEvent/index'
import Schedule from '../Schedule/index'
import DetailsCard from '../DetailsCard/index'

function Main ({ temperature }:any) {
  const { isOpenModal, isDetailOpen, setIsDetailOpen } = useContext(UserContext)

  function handleDetails () {
    if (!isDetailOpen) setIsDetailOpen(true)
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
          isDetailOpen && <DetailsCard />
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
