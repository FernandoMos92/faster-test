import React from 'react'
import Image from '../../../node_modules/next/image'
import arrowLeft from '../../../public/images/arrow-left.svg'
import arrowRight from '../../../public/images/arrow-right.svg'

function Calendar () {
  const daysOfTheWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  const days = []

  for (let index = 1; index <= 31; index += 1) {
    days.push(index)
  }

  return (
    <div className='calendar__container'>

      <section className='calendar__container-month'>
        <Image src={arrowLeft}/>
        <p className='calendar__container-nameMonth'>Agosto</p>
        <Image src={arrowRight}/>
      </section>

      <table>
        <thead>
          <tr>
            {
              daysOfTheWeek.map((day) => <th key={day}> { day } </th>)
            }
          </tr>
        </thead>
        <tbody>
          {
            
          }
        </tbody>
      </table>

      </div>
  )
}

export default Calendar
