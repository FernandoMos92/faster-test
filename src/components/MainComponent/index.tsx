import React from 'react'
import MyCalendar from '../Calendar'
import NextEvents from '../NextEvents'
import Schedule from '../Schedule'
import Main from './Main'

function MainComponent () {
  return (
    <Main>
      <section className='mainComponent__left'>
        <MyCalendar />
        <label htmlFor='nextEvent' className='nextEvent'>
          Next Event
        </label>
        <NextEvents id='nextEvent' />
      </section>
      <hr className='mainComponent__separatorLine' />
      <section className='mainComponent__right'>
        <Schedule />
      </section>
    </Main>
  )
}

export default MainComponent
