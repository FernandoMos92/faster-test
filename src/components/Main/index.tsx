import React, { useState } from 'react'
import Scalendar from '../../styles/Main'
import testMock from '../../mock/taskMock'
import MyCalendar from '../Calendar/index'
import CardNewEvent from '../CardNewEvent/index'

function Main () {
  return (
    <Scalendar>
      <MyCalendar />
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
      {
        !active && <CardNewEvent />
      }
      <section className='calendar__daily'>
        Daily
     </section>
    </Scalendar>
  )
}

export default Main
