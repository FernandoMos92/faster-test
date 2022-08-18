import React, { useCallback, useContext } from 'react'
import { UserContext } from '../../Context/Context'
import { Calendar } from '@natscale/react-calendar'
import '@natscale/react-calendar/dist/main.css'

function MyCalendar () {
  const { dateEvent, setDateEvent } = useContext(UserContext)
  const onChange = useCallback(
    (val) => {
      setDateEvent(val)
    },
    [setDateEvent]
  )
  return (
    <Calendar
      className="calendar__container"
      value={dateEvent}
      onChange={onChange}
      hideAdjacentDates
      fontSize={18}
      size={ 350 }
    />
  )
}

export default MyCalendar
