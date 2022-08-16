import React from 'react'
import Scalendar from '../../styles/Main'
import testMock from '../../mock/taskMock'

function MyCalendar () {
  return (
    <Scalendar>
      <section className='calendar__container'>
        Calendario aqui
      </section>
      <section className='calendar__events'>
        <h2 className='calendar__events-title'>Next Event</h2>
        <ul className='calendar__events-list'>
          {
            testMock.map((el) => (
              <li
                key={el.title}
                className='calendar__events-listItem'
              >
                <h3>{el.title}</h3>
                <p>{el.date}</p>
                <p>{ el.eventHour }</p>
              </li>
            ))
          }
        </ul>
     </section>
      <section className='calendar__daily'>
        Daily
     </section>
    </Scalendar>
  )
}

export default MyCalendar
