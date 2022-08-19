import React from 'react'
import Image from '../../../node_modules/next/image'
import Logo from '../../../public/images/fasters.png'
import { mainIcons, myAccontIcons, systemIcons } from '../../utils/icons'
import Aside from './Aside'

function NavBar () {
  return (
    <Aside>
      <span className='aside__image-logo'>
        <Image src={Logo} alt=''/>
      </span>
      <section className='aside__main-container'>
        <ul className='aside__list-icon'>
          {mainIcons.map(({ icon, name }) => (
            <li key={name}>
              <Image src={icon} alt='icone' />
              <span>{name}</span>
            </li>
          ))}
        </ul>
      </section>
      <section className='aside__myAccount-contianer'>
        <p>My account</p>
        {myAccontIcons.map(({ icon, name }) => (
          <li key={name}>
            <Image src={icon} alt='icone' />
            <span>{name}</span>
          </li>
        ))}
      </section>
      <section className='aside__settings-contianer'>
        <p>System</p>
        {systemIcons.map(({ icon, name }) => (
          <li key={name}>
            <Image src={icon} alt='icone' />
            <span
              style={
                name === 'Sair' ? { color: '#4CA7A8' } : { color: '#0F1527' }
              }>
              {name}
            </span>
          </li>
        ))}
      </section>
    </Aside>
  )
}

export default NavBar
