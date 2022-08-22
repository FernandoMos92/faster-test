import React from 'react'
import styled from 'styled-components'

const BlockTime = styled.div`
  border: 2px solid black;
  border-radius: 6px;
  position: absolute;
  height: 60px;
  width: 102%;
  left: 165px;
  padding: 10px;
  background-color: #E9F4F5;
  color: #4CA7A8;
  border-color: #4CA7A8;

  h3, p {
    background-color: transparent;
    text-align: justify;
  }
`

function ReservedTime () {
  return (
    <BlockTime>
      <h3>Título do evento</h3>
      <p>data do evento</p>
    </BlockTime>
  )
}

export default ReservedTime
