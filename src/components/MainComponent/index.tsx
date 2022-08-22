import React, { useContext, useState } from 'react'
import MyCalendar from '../Calendar'
import NextEvents from '../NextEvents'
import Schedule from '../Schedule'
import Main from './Main'

import { UserContext } from '../../Context/UserContext'
import CardNewEvent from '../CardNewEvent'
import readLocalStorage from '../../utils/readLocalStorage'
import DetailsCard from '../DetailsCard'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function MainComponent () {
  const { isOpenModal, isDetailOpen, setIsDetailOpen } = useContext(UserContext)
  const [details, setDetails] = useState({
    title: '',
    description: '',
    date: Date,
    hour: '',
    id: 0,
    location: '',
    minute: ''
  })

  function handleDetails ({ target }) {
    const elementsLocal = readLocalStorage()
    elementsLocal.forEach(el => {
      if (el.id === parseInt(target.id)) {
        const { date, description, hour, id, location, minute, title } = el
        if (title.length !== 0 && date.length !== 0) {
          setDetails({
            title,
            description,
            hour,
            id,
            location,
            minute,
            date
          })
          if (!isDetailOpen) setIsDetailOpen(true)
        }
      }
    })
  }

  const notify = () => {
    toast.success('Evento criado com sucesso!', {
      position: 'top-right',
      autoClose: 10000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    })
  }

  return (
    <Main>
      <ToastContainer
        position='top-right'
        autoClose={10000}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <section className='mainComponent__left'>
        {isOpenModal && <CardNewEvent notify={ notify } />}
        <MyCalendar />
        <label htmlFor='nextEvent' className='nextEvent'>
          Next Event
        </label>
        {isDetailOpen && <DetailsCard elements={details} setDetails={setDetails} />}
        <NextEvents onClick={handleDetails} />
      </section>
      <hr className='mainComponent__separatorLine' />
      <section className='mainComponent__right'>
        <Schedule />
      </section>
    </Main>
  )
}

export default MainComponent
