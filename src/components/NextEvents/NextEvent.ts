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
      border: 1px solid #e8e8e8;
      height: 108px;
      list-style: none;
      margin-bottom: 10px;
      padding: 12px 16px;
      transition: all 0.2s ease-in-out;
      width: 416px;
      z-index: -99;

      &:first-child {
        margin-top: 40px;
      }

      &:hover {
        background-color: #e9f4f5;
        color: #4ca7a8;
        cursor: pointer;
        transform: scale(0.9);
      }

      .eventCard__title {
        display: flex;
        flex-flow: column nowrap;
        height: 44px;
        justify-content: space-evenly;
        width: 284px;

        h3 {
          color: #0F1527;
          font-weight: 700;
          font-size: 16px;
          line-height: 140%;
        }

        p {
          color: #B4BAC5;
          font-weight: 400;
          font-size: 16px;
          line-height: 130%;
        }
      }

      .eventCard__hours {
        align-items: center;
        color: #4CA7A8;
        display: flex;
        font-size: 12px;
        font-weight: 500;
        line-height: 140%;
        margin-top: 20px;

        p {
          font-size: 16px;
          margin-left: 10px;
        }
      }
    }
  }

  .eventCard__icon-clock {
    font-size: 24px;
  }
`
export default NextEvent
