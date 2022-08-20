import React from 'react'
import styled from 'styled-components'
import MyCalendar from '../Calendar'

const Main = styled.main`
  border: 2px solid black;
  display: flex;
  padding: 32px;

  .mainComponent__left,
  .mainComponent__right {
  }

  .mainComponent__left {
    width: 26.96%;
    height: 753px;
  }

  .mainComponent__right {
    height: 800px;
    width: 68%;
  }

  .mainComponent__separatorLine {
    margin: 0 40px;
  }

  .calendar__container {
    border: 1px solid #e8e8e8;
    margin-bottom: 32px;
    height: 355px;
    width: 100%;
    .calendar__container-month {
      display: flex;
      justify-content: space-between;
      width: 365px;
    }

    .calendar__container-nameMonth {
      font-size: 13px;
      margin-bottom: 24px;
    }

    .rc_header_nav.rc_header_nav-prev > span {
      visibility: hidden;
    }

    .rc_header_nav.rc_header_nav-next > span {
      visibility: hidden;
    }

    .rc_header_nav.rc_header_nav-prev {
      position: relative;
    }

    .rc_header_nav.rc_header_nav-prev::after {
      content: ' ';
      background-image: url('/images/arrow-left.svg');
      background-size: contain;
      background-repeat: no-repeat;
      position: absolute;
      height: 10px;
      width: 10px;
      top: 0.8rem;
      left: 0.8rem;
    }
    .rc_header_nav.rc_header_nav-next::before {
      content: ' ';
      background-image: url('/images/arrow-right.svg');
      background-size: contain;
      background-repeat: no-repeat;
      position: absolute;
      height: 10px;
      width: 10px;
      top: 1rem;
      right: 1rem;
    }
  }
`

function MainComponent () {
  return (
    <Main>
      <section className='mainComponent__left'>
        <MyCalendar />
      </section>
      <hr className='mainComponent__separatorLine' />
      <section className='mainComponent__right'>Direita</section>
    </Main>
  )
}

export default MainComponent
