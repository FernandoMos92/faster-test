import React, { useContext } from 'react'
import MyCalendar from '../Calendar'
import NextEvents from '../NextEvents'
import Schedule from '../Schedule'
import Main from './Main'

import { UserContext } from '../../Context/UserContext'
import CardNewEvent from '../CardNewEvent'

function MainComponent ({ climate }: any) {
  const myContext = useContext(UserContext)
  const { isOpenModal } = myContext

  return (
    <Main>
      <section className='mainComponent__left'>
        {isOpenModal && <CardNewEvent climate={climate} />}
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
