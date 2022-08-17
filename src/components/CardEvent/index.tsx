import React, { useState, useContext } from 'react'
import { UserContext } from '../../Context/Context'

function CardEvent () {
  const { allEvents } = useContext(UserContext)
  const [events] = useState([...allEvents])

  return (
    <section className='calendar__events'>
      <h3 className='calendar__events-title'>Next Event</h3>
      {
        events.length === 0
          ? (<h2 className='event__notFound'>Nenhum evento marcado</h2>)
          : (
              <ul className='calendar__events-list'>
                {events.map(el => (
                <li key={el.title} className='calendar__events-listItem'>
                  <h3>{el.title}</h3>
                  <p>{el.date}</p>
                  <p>{el.eventHour}</p>
                </li>
                ))}
              </ul>
            )
      }
    </section>
  )
}

export default CardEvent
