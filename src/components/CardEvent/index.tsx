import React, { useContext, useState } from 'react'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { UserContext } from '../../Context/Context'
import EventCard from '../../styles/EventCard'
import { getMonth } from '../../utils/generateDate'

function CardEvent () {
  const myContext = useContext(UserContext)
  console.log('🚀 -> myContext', myContext)

  const formatOutputDate = (date) => {
    const arrayDate = date.split('/')
    const monthName = getMonth(+arrayDate[1])
    const output = `${monthName} ${arrayDate[0]}, ${arrayDate[2]}`

    return output
  }

  const formatHour = ({ hour, minute }) => {
    const newHour = hour.split(' ')[0].length === 1 ? `0${hour.split(' ')[0]}` : hour.split(' ')[0].length
    const newMinute = minute.split(' ')[0].length === 1 ? `0${minute}` : minute
    return `${newHour} : ${newMinute} ${hour.split(' ')[1]}`
  }

  return (
    <EventCard>
      {myContext.allEvents.length === 0
        ? (
        <h2 className='event__notFound'>Nenhum evento marcado</h2>
          )
        : (
        <ul className='calendar__events-list'>
          {myContext.allEvents.map(el => (
            <li key={el.title} className='calendar__events-listItem'>
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
