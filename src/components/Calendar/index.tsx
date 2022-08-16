import React, { useCallback, useState } from 'react'
import '@natscale/react-calendar/dist/main.css'
import { Calendar } from '@natscale/react-calendar'

function MyCalendar () {
  const [value, setValue] = useState(new Date())

  const onChange = useCallback(
    (val) => {
      setValue(val)
    },
    [setValue]
  )
  return (
    <Calendar
      className="calendar__container"
      value={value}
      onChange={onChange}
      hideAdjacentDates
      fontSize={18}
      size={ 350 }
    />
  )
}

export default MyCalendar
