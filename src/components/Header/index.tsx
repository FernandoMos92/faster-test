import React, { useContext } from 'react'
import Image from '../../../node_modules/next/image'
import bellsIcon from '../../../public/images/bell.svg'
import profileUser from '../../../public/images/profile.svg'
// import magnifier from '../../../images/magnifier.svg'
import Sheader from '../../styles/Sheader'
import generateDate from '../../utils/generateDate'
import { UserContext } from '../../Context/Context'

function Header () {
  const date = generateDate()

  const MyContext = useContext(UserContext)
  const { setIsOpenModal } = MyContext

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
        <button
          className='header__addButton-event'
          onClick={ () => setIsOpenModal(true)}
        >
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
