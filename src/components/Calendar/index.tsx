import React from 'react'
import Scalendar from '../../styles/Main'

function MyCalendar () {
  return (
    <Scalendar>
      <section className='calendar__container'>
        Calendario aqui
     </section>
      <section className='calendar__events'>
        Next Event
     </section>
      <section className='calendar__daily'>
        Daily
     </section>
    </Scalendar>
  )
}

export default MyCalendar
