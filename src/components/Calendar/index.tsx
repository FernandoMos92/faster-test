import React, { useCallback, useContext } from 'react'
import '@natscale/react-calendar/dist/main.css'
import { Calendar } from '@natscale/react-calendar'
import { UserContext } from '../../Context/Context'

function MyCalendar () {
  const context = useContext(UserContext)
  const onChange = useCallback(
    (val) => {
      context.setValue(val)
    },
    [context.setValue]
  )
  return (
    <Calendar
      className="calendar__container"
      value={context.value}
      onChange={onChange}
      hideAdjacentDates
      fontSize={18}
      size={ 350 }
    />
  )
}

export default MyCalendar
