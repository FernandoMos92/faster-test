import React, { useContext } from 'react'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { UserContext } from '../../Context/Context'
import EventCard from '../../styles/EventCard'
import { formatHour } from '../../utils/formatHour'
import { getMonth } from '../../utils/generateDate'

function CardEvent (props) {
  const myContext = useContext(UserContext)

  const formatOutputDate = (date) => {
    const arrayDate = date.split('/')
    const monthName = getMonth(+arrayDate[1])
    const output = `${monthName} ${arrayDate[0]}, ${arrayDate[2]}`

    return output
  }

  return (
    <EventCard>
      {myContext.allEvents.length === 0
        ? (
        <h2 className='event__notFound'>Nenhum evento marcado</h2>
          )
        : (
          <ul className='calendar__events-list'>
          {myContext.allEvents.map((el, index) => (
            <li
              {...props}
              key={index}
              className='calendar__events-listItem'
            >
              <section className='eventCard__title'>
                <h3>{el.title}</h3>
                <p>{formatOutputDate(el.date)}</p>
              </section>
              <section className='eventCard__hours'>
                <AiOutlineClockCircle className="eventCard__icon-clock"/>
                <p>{`${formatHour(el)}`}</p>
              </section>
            </li>
          ))}
        </ul>
          )}
    </EventCard>
  )
}

export default CardEvent
