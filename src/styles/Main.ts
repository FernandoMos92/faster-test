import styled from 'styled-components'

const Scalendar = styled.main`
  position: absolute;
  top: 138px;
  left:  266px;
  height: 85.6vh;
  width: 85.5vw;
  padding: 32px 32px 0 32px;
  position: relative;

  .calendar__container {
    border: 2px solid black;
    margin-bottom: 32px;
    height: 349px;
    width: 420px;
  }

  .calendar__events {
    border: 2px solid blue;
    height: 420px;
    width: 420px;
  }

  .calendar__daily {
    border: 2px solid red;
    position: absolute;
    right: 32px;
    top: 32px;
    width: 1080px;
    height: 800px;
  }
`

export default Scalendar
