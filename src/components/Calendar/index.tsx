import React, { useCallback, useContext } from 'react'
import { UserContext } from '../../Context/Context'
import { Calendar } from '@natscale/react-calendar'
import '@natscale/react-calendar/dist/main.css'

function MyCalendar () {
  const { dateEvent, setDateEvent } = useContext(UserContext)

  const monthsLabel = {
    0: 'Janeiro',
    1: 'Fevereiro',
    2: 'Março',
    3: 'Abril',
    4: 'Maio',
    5: 'Junho',
    6: 'Julho',
    7: 'Agosto',
    8: 'Setembro',
    9: 'Outubro',
    10: 'Novembro',
    11: 'Dezembro'
  }

  const weekDaysLabel = {
    0: 'Seg',
    1: 'Ter',
    2: 'Qua',
    3: 'Qui',
    4: 'Sex',
    5: 'Sab',
    6: 'Dom'
  }

  const onChange = useCallback(
    (val) => {
      setDateEvent(val)
    },
    [setDateEvent]
  )
  return (
    <Calendar
      className="calendar__container"
      monthsLabel={monthsLabel}
      weekDaysLabel={ weekDaysLabel }
      value={dateEvent}
      onChange={onChange}
      hideAdjacentDates
      fontSize={18}
      size={ 350 }
    />
  )
}

export default MyCalendar
