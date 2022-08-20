import React from 'react'
import serializeData from '../../helpers/serializeData'
import Table from './Table'

function Schedule () {
  return (
    <Table>
      <thead>
      </thead>
      <tbody>
        {
          serializeData().map((el, index) => (
            <tr key={ index }>
              <td className='schedule schedule__hour'>{el}</td>
              <td className='schedule__lineTime'>
                <section className='schedule__firstHalf-hour'></section>
                <section className='schedule__secondHalf-hour'></section>
              </td>
            </tr>
          ))
        }
      </tbody>
    </Table>
  )
}

export default Schedule
