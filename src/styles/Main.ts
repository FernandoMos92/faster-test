import styled from 'styled-components'

const Scalendar = styled.main`
  display: flex;
  flex-flow: column nowrap;
  background-color: #FFF;
  position: absolute;
  top: 138px;
  left:  266px;
  height: 85.6vh;
  width: 85.5vw;
  padding: 32px 32px 0 32px;

  .calendar__container {
    border: 1px solid #E8E8E8;
    margin-bottom: 32px;
    padding: 24px;
    height: 349px;
    width: 420px;

    .calendar__container-month {
      display: flex;
      justify-content: space-between;
      width: 365px;
    }

    .calendar__container-nameMonth {
      font-size: 24px;
      margin-bottom: 24px;
    }

    table {
      thead {
        tr{
          display: flex;
          flex-flow: row nowrap;
          justify-content: space-between;
          width: 360px;
          color: #B4BAC5;
          font-style: normal;
          font-weight: 500;
          font-size: 15px;
          line-height: 17px;
          margin-bottom: 21.5px;
        }
      }
    }

  }

  .calendar__events {
    overflow: scroll;
    overflow-x: hidden;
    height: 420px;
    width: 420px;

    ::-webkit-scrollbar {
      background-color: transparent;
      width: .5px;
    }

    .calendar__events-title {
      background-color: #FFFFFF;
      font-weight: 700;
      font-size: 20px;
      color: #0F1527;
      line-height: 26px;
      margin-bottom: 12px;
      position: fixed;
      height: 3vh;
      width: 420px;
      z-index: 99;
    }
    
    .calendar__events-list {
      .calendar__events-listItem {
        border: 1px solid #E8E8E8;
        list-style: none;
        width: 416px;
        height: 108px;
        padding: 12px 16px;
        margin-bottom: 10px;
        transition: all .2s ease-in-out;
        z-index: -99;

        &:first-child {
          margin-top: 40px;
        }

        &:hover {
          transform: scale(.9);
          color: #4CA7A8;
          cursor: pointer;
          background-color: #E9F4F5;
        }
      }

    }

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
