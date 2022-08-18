import React, { useContext } from 'react'
import Image from '../../../node_modules/next/image'
import bellsIcon from '../../../public/images/bell.svg'
import profileUser from '../../../public/images/profile.svg'
import HeaderComponent from '../../styles/HeaderComponent'
import generateDate from '../../utils/generateDate'
import { UserContext } from '../../Context/Context'
import { BsSearch } from 'react-icons/bs'

function Header () {
  const date = generateDate()

  const MyContext = useContext(UserContext)
  const { setIsOpenModal } = MyContext

  return (
   <HeaderComponent>
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
          <BsSearch
            className='header__search-icon'
          />
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
      </HeaderComponent>
  )
}
export default Header
