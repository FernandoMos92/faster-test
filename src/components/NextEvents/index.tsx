import React, { useContext } from 'react'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { UserContext } from '../../Context/UserContext'
import NextEvent from './NextEvent'
import { formatHour } from '../../utils/formatHour'
import { getMonth } from '../../utils/generateDate'

function NextEvents (props) {
  const { allEvents, filterEvents } = useContext(UserContext)

  const formatOutputDate = (date) => {
    const arrayDate = date.split('/')
    const monthName = getMonth(parseInt(arrayDate[1]))
    const output = `${monthName} ${arrayDate[0]}, ${arrayDate[2]}`

    return output
  }

  return (
    <NextEvent>
      {
      allEvents.length === 0 && filterEvents.length === 0
        ? (
        <p className='event__notFound'>Nenhum evento marcado</p>
          )
        : filterEvents.length > 0
          ? (
            <ul className='calendar__events-list'>
              {
                filterEvents.map((el, index) => (
                  <li
                    {...props}
                    id={el.id}
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

            )
          : (
                  <ul className='calendar__events-list'>
              {
                allEvents.map((el, index) => (
                  <li
                    id={el.id}
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
    </NextEvent>
  )
}

export default NextEvents
