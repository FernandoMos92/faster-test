import React, { useContext, useState } from 'react'
import Image from '../../../node_modules/next/image'
import bellsIcon from '../../../public/images/bell.svg'
import profileUser from '../../../public/images/profile.svg'
import HeaderComponent from './HeaderComponent'
import generateDate from '../../utils/generateDate'
import { UserContext } from '../../Context/UserContext'
import { BsSearch } from 'react-icons/bs'

function Header () {
  const [searchInput, setSearchInput] = useState('')
  const date = generateDate()

  const MyContext = useContext(UserContext)
  const { allEvents, setIsOpenModal, setFilterEvents } = MyContext

  const eventsFiltered = () => {
    if (searchInput) {
      const filtered = allEvents.filter((el) => (
        el.title.includes(searchInput.toUpperCase()) ||
        el.description.includes(searchInput.toUpperCase()) ||
        el.date.includes(searchInput)))
      setFilterEvents(filtered)
      return filtered
    }
  }

  const handleChange = evt => {
    setSearchInput(evt.target.value)
    eventsFiltered()
  }

  return (
    <HeaderComponent>

      <div className='header__container'>

        <section className='header__container-date'>
          <h2 className='header__date-month'>{date.nameMonth}</h2>
          <p className='header__date-fullDate'>{date.abbDate}</p>
        </section>

        <section className='header__container-search'>
          <button
            className='header__button-newEvent'
            onClick={() => setIsOpenModal(true)}>
            + Create event
          </button>
          <BsSearch className='header__search-icon' />
          <input
            value={searchInput}
            onChange={handleChange}
            className='header__search-input'
            type='text'
            placeholder='Search task, event, calendar'
          />
          <button className='header__button-bell'>
            <Image src={bellsIcon} />
          </button>
          <button className='header__button-user'>
            <Image src={profileUser} />
          </button>
        </section>

      </div>
    </HeaderComponent>
  )
}
export default Header
