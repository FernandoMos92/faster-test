import styled from 'styled-components'

const NextEvent = styled.div`
  overflow: scroll;
  overflow-x: hidden;
  position: relative;
  height: 370px;
  width: 100%;

  ::-webkit-scrollbar {
    background-color: transparent;
    width: 0.5px;
  }

  .event__notFound {
    align-items: center;
    display: flex;
    font-size: 22px;
    height: 100%;
    justify-content: center;
  }

  .calendar__events-list {
    .calendar__events-listItem {
      background-color: transparent;
      border: 1px solid #e9f4f5;
      border-radius: 6px;
      height: 108px;
      list-style: none;
      margin-bottom: 10px;
      padding: 12px 16px;
      transition: all 0.2s ease-in-out;
      width: 290px;
      z-index: -92;

      &:first-child {
        margin-top: 40px;
      }

      &:hover {
        background-color: #e9f4f5;
        color: #4ca7a8;
        cursor: pointer;
        transform: scale(0.9);

        .eventCard__title {
          background-color: #e9f4f5;
        }
      }

      .eventCard__title {
        background-color: transparent;
        display: flex;
        flex-flow: column nowrap;
        height: 44px;
        justify-content: space-evenly;
        pointer-events: none;
        width: fit-content;
        user-select: none;
        z-index: -99;

        h3 {
          background-color: transparent;
          color: #0F1527;
          font-weight: 700;
          font-size: 16px;
          line-height: 140%;
          width: fit-content;
        }

        p {
          background-color: transparent;
          color: #B4BAC5;
          font-weight: 400;
          font-size: 16px;
          line-height: 130%;
          width: fit-content;
        }
      }

      .eventCard__hours {
        align-items: center;
        background-color: transparent;
        color: #4CA7A8;
        display: flex;
        font-size: 12px;
        font-weight: 500;
        line-height: 140%;
        margin-top: 20px;
        user-select: none;
        pointer-events: none;
        width: fit-content;
        z-index: -99;

        p {
          background-color: transparent;
          font-size: 16px;
          margin-left: 10px;
        }
      }
    }
  }

  .eventCard__icon-clock {
    background-color: transparent;
    font-size: 24px;
  }

  @media screen and (min-width: 1440px){
    .calendar__events-list {
      .calendar__events-listItem {
        width: 100%;
        
      }
     }
  }

  @media screen and (min-width: 1920px) {
     .calendar__events-list {
      .calendar__events-listItem {
        width: 100%;
        
      }
     }
  }
`
export default NextEvent
