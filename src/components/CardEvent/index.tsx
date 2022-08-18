import React, { useContext } from 'react'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { UserContext } from '../../Context/Context'
import styled from 'styled-components'

const EventCard = styled.div`
  overflow: scroll;
  overflow-x: hidden;
  position: relative;
  height: 370px;
  width: 420px;

  ::-webkit-scrollbar {
    background-color: transparent;
    width: 0.5px;
  }

  .event__notFound {
    font-size: 22px;
    font-weight: 400;
    position: absolute;
    text-align: center;
    margin-left: 50px;
    top: 560px;
  }

  .calendar__events-list {
    .calendar__events-listItem {
      border: 1px solid #e8e8e8;
      list-style: none;
      width: 316px;
      height: 108px;
      padding: 12px 16px;
      margin-bottom: 10px;
      transition: all 0.2s ease-in-out;
      z-index: -99;

      &:first-child {
        margin-top: 40px;
      }

      &:hover {
        transform: scale(0.9);
        color: #4ca7a8;
        cursor: pointer;
        background-color: #e9f4f5;
      }

      .eventCard__title {
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-evenly;
        width: 284px;
        height: 44px;

        h3 {
          color: #0F1527;
          font-weight: 700;
          font-size: 16px;
          line-height: 140%;
        }

        p {
          color: #B4BAC5;
          font-weight: 400;
          font-size: 14px;
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
          margin-left: 10px;
        }
      }
    }
  }
`

function CardEvent () {
  const { allEvents } = useContext(UserContext)

  return (
    <EventCard>
      {allEvents.length === 0
        ? (
        <h2 className='event__notFound'>Nenhum evento marcado</h2>
          )
        : (
        <ul className='calendar__events-list'>
          {allEvents.map(el => (
            <li key={el.title} className='calendar__events-listItem'>
              <section className='eventCard__title'>
                <h3>{el.title}</h3>
                <p>{el.date}</p>
              </section>
              <section className='eventCard__hours'>
                <AiOutlineClockCircle />
                <p>{`${el.hour.split('')[0]}:${el.minute} ${
                  el.hour.split('')[3]
                }${el.hour.split('')[4]}`}</p>
              </section>
            </li>
          ))}
        </ul>
          )}
    </EventCard>
  )
}

export default CardEvent
