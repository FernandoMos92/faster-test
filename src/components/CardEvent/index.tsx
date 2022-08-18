import React, { useContext } from 'react'
import { UserContext } from '../../Context/Context'

function CardEvent () {
  const { allEvents } = useContext(UserContext)

  return (
    <section className='calendar__events'>
      <h3 className='calendar__events-title'>Next Event</h3>
      {
        allEvents.length === 0
          ? (<h2 className='event__notFound'>Nenhum evento marcado</h2>)
          : (
              <ul className='calendar__events-list'>
                {allEvents.map(el => (
                <li key={el.title} className='calendar__events-listItem'>
                  <h3>{el.title}</h3>
                  <p>{el.description}</p>
                  <p>{el.location}</p>
                  <p>{el.date}</p>
                  <p>{`${el.hour}:${el.minute} min`}</p>
                </li>
                ))}
              </ul>
            )
      }
    </section>
  )
}

export default CardEvent
