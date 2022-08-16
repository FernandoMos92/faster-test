import React from 'react'
import Image from '../../../node_modules/next/image'
import bellsIcon from '../../../public/images/bell.svg'
import profileUser from '../../../public/images/profile.svg'
import Sheader from '../../styles/Sheader'
import generateDate from '../../utils/generateDate'

function Header () {
  const date = generateDate()

  return (
   <Sheader>
        <section className='header__date'>
          <h2>
            {date.nameMonth}
          </h2>
          <p>
            {date.abbDate}
          </p>
        </section>
        <section className='header__search'>
          <button className='header__search-button'>
            + Create event
          </button>
          <input
            className='header__search-input'
            type="text"
            placeholder='Search task, event, calendar'
          />
          <button className='header__button-bell'>
            <Image src={bellsIcon} />
          </button>
          <button className='header__button-user'>
            <Image src={profileUser} />
          </button>
        </section>
      </Sheader>
  )
}
export default Header
