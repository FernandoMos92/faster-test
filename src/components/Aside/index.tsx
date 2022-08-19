import React from 'react'
import Image from '../../../node_modules/next/image'
import Logo from '../../../public/images/fasters.png'
import { mainIcons, myAccontIcons, systemIcons } from '../../utils/icons'
import Aside from './Aside'

function NavBar() {
  return (
    <Aside>
      <span className='aside__image-logo default__aside-style'>
        <Image src={Logo} alt='' />
      </span>

      <nav className='aside__nav-pages default__aside-style'>
        <ul className='aside__nav-options'>
          {mainIcons.map(({ icon, name }) => (
            <span key={name} className='aside__nav-itens'>
              <li>
                <Image src={icon} alt='icone' />
                <span>{name}</span>
              </li>
            </span>
          ))}
        </ul>
      </nav>

      <nav className='aside__nav-account default__aside-style'>
        <label htmlFor='aside__list' className='aside__list-label'>
          My account
        </label>
        <ul id='aside__list' className='aside__list'>
          {myAccontIcons.map(({ icon, name }) => (
            <span key={name} className='aside__nav-itens'>
              <li>
                <Image src={icon} alt='icone' />
                <span>{name}</span>
              </li>
            </span>
          ))}
        </ul>
      </nav>

      <nav className='aside__nav-system default__aside-style'>
        <label htmlFor='aside__list' className='aside__list-label'>
          System
        </label>
        <ul id='aside__list' className='aside__list'>
          {systemIcons.map(({ icon, name }) => (
            <span key={name} className='aside__nav-itens'>
              <li>
                <Image src={icon} alt='icone' />
                <span>{name}</span>
              </li>
            </span>
          ))}
        </ul>
      </nav>
    </Aside>
  )
}

// systemIcons

// <span
//               style={
//                 name === 'Sair' ? { color: '#4CA7A8' } : { color: '#0F1527' }
//               }>
//               {name}
//             </span>

export default NavBar
