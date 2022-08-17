import React from 'react'
import generateSchudele from '../../utils/generateSchudele'
import styled from 'styled-components'

const Table = styled.table`

tbody {
  
  td {
    border-bottom: 2px solid #E8E8E8;
    margin-bottom: 5px;
    width: 160px;
    height: 80px;
    user-select: none;
  }
}
`

function Schedule () {
  const data = generateSchudele()

  console.log(data)

  return (
    <Table>
      <thead>
      </thead>
      <tbody>
        {
          data.hours.map((el, index) => (
            <tr key={ index }>
              <td>{ el }</td>
            </tr>
          ))
        }
      </tbody>
    </Table>
  )
}

export default Schedule
