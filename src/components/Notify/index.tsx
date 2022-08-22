import React from 'react'
import styled from 'styled-components'

const NotifyCard = styled.div`
  border: 2px solid red;
  font-size: 18px;
`

function Notify () {
  return (
    <NotifyCard>
      NOTIFICAÇÃO
    </NotifyCard>
  )
}

export default Notify
