import React from 'react'
import generateSchudele from '../../utils/generateSchudele'
import styled from 'styled-components'

const Table = styled.table`

tbody {
  td {
    border-right: 2px solid #E8E8E8;
    border-bottom: 2px solid #E8E8E8;
    color: #B4BAC5;
    font-size: 16px;
    text-align: end;
    padding: 10px;
    width: 160px;
    height: 80px;
    user-select: none;
  }

  .schedule__lineTime {
    width: 85%;
  }
}
`

function Schedule () {
  const data = generateSchudele()

  return (
    <Table>
      <thead>
      </thead>
      <tbody>
        {
          data.hours.map((el, index) => (
            <tr key={ index }>
              <td className='schedule__'>{el}</td>
              <td className='schedule__lineTime'>
                <hr />
              </td>
            </tr>
          ))
        }
      </tbody>
    </Table>
  )
}

export default Schedule
