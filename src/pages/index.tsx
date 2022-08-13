import React, { useState } from 'react'
import Image from '../../node_modules/next/image'
import Logo from '../../public/images/fasters.png'
import generateDate from '../utils/generateDate'
import { mainIcons, myAccontIcons, systemIcons } from '../utils/icons'
import bellsIcon from '../../public/images/bell.svg'
import profileUser from '../../public/images/profile.svg'
import Sheader from '../styles/Sheader'
import Aside from '../styles/Aside'
import Main from '../styles/Main'

function Home () {
  const [date, setDate] = useState(generateDate())
  return (
    <>
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
      <Aside>
        <div>
          <Image src={Logo} alt="" />
          <section className="aside__main-container">
            <ul className="aside__list-icon">
              {
                mainIcons.map(({ icon, name }) => (
                  <li key={name}>
                    <Image src={icon} alt="icone" />
                    <span>{ name}</span>
                  </li>
                ))
              }
            </ul>
          </section>
          <section className="aside__myAccount-contianer">
            <p>My account</p>
            {
              myAccontIcons.map(({ icon, name }) => (
                <li key={name}>
                  <Image src={icon} alt="icone" />
                  <span>{ name}</span>
                </li>
              ))
            }
          </section>
          <section className="aside__settings-contianer">
            <p>System</p>
             {
              systemIcons.map(({ icon, name }) => (
                <li key={name}>
                  <Image src={icon} alt="icone" />
                  <span>{ name}</span>
                </li>
              ))
              }
          </section>
        </div>
      </Aside>
      <Main>
        main
      </Main>
    </>
  )
}

export default Home
